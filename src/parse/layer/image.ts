import fs from 'fs'
import { Buffer } from 'buffer'
import Layer from "../base/layer";
import { resolve } from 'dns';

export default class ImageLayer extends Layer {
    constructor(layerNode) {
        super(layerNode)
        this.toBase64().then(res => console.log(res))
        // this.streamToBuffer(image, res => console.log(111,res))
        // image.pipe(fs.createWriteStream(`./${layerNode.name}.png`))
        // fs.writeFile(`./${layerNode.name}.png`, data, function (err) {
        //     if (err) {
        //         console.log("error");
        //     } else {
        //         console.log("ok");
        //     }
        // })

    }

    public async getLayerTemplate() {
        return this.layerTemplate
    }

    public toBase64() {
        let image = this.layerNode.layer.image.toPng()
        return new Promise((resolve, reject) => {
          const chunks = [];
          
          image.pack();  // [1]
          image.on('data', (chunk) => {
            chunks.push(chunk);  // [2]
          });
          image.on('end', () => {
            resolve(`data:image/png;base64,${Buffer.concat(chunks).toString('base64')}`);  // [3]
          });
          image.on('error', (err) => {
            reject(err);
          });
        });
      }
      
}