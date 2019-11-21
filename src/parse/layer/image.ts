import fs from 'fs'
import { Buffer } from 'buffer'
import Layer from "../base/layer";
import { resolve } from 'dns';

export default class ImageLayer extends Layer {

    base64: String
    constructor(layerNode) {
        super(layerNode)
    }

    static async createLayer(layerNode) {
        let imageLayer = new ImageLayer(layerNode)
        imageLayer.base64 = await imageLayer.toBase64(layerNode)
        // imageLayer.base64 = "#### base64 ####"
        return imageLayer
    }

    public toBase64(layerNode): Promise<String> {
        let image = layerNode.layer.image.toPng()
        return new Promise((resolve, reject) => {
          const chunks = [];
          
          image.pack();  // [1]
          image.on('data', (chunk) => {
            chunks.push(chunk);  // [2]
          });
          image.on('end', () => {
            resolve(`${Buffer.concat(chunks).toString('base64')}`);  // [3]
          });
          image.on('error', (err) => {
            reject(err);
          });
        });
      }
      
}