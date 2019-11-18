import fs from 'fs'
import { Buffer } from 'buffer'
import Layer from "../base/layer";
import { resolve } from 'dns';

export default class ImageLayer extends Layer {
    constructor(layerNode) {
        super(layerNode)


        // fs.writeFile(`./${layerNode.name}.png`, data, function (err) {
        //     if (err) {
        //         console.log("error");
        //     } else {
        //         console.log("ok");
        //     }
        // })

    }

    public async getLayerTemplate() {
        let image = this.layerNode.layer.image.toPng()
        let a = function(dest) {
            this.on = function() {
                console.log(dest)
            }
            
        }
        image.pipe()

        return this.layerTemplate
    }
}