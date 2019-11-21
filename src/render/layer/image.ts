import { Layer } from "../base/layer";
import { loadImage, createCanvas } from 'canvas'
import { LayerNodeInterface } from "../../types";
import { imageToBase64 } from "../utils/util";

export default class ImageLayer extends Layer {
    public base64: string

    constructor(layerNode: LayerNodeInterface) {
        super(layerNode)
        this.base64 = layerNode.base64
    }

    resize(img) {
        let { width, height } = this
        let itemRatio = width / height
        let sizeRatio = img.width / img.height
        if (sizeRatio < itemRatio) {
            this.width = height / img.height * img.width
            this.height = this.height
            this.x += (height - this.height) / 2
            this.y += (width - this.width) / 2
        } else {
            this.width = img.width
            this.height = width / img.width * img.height
            this.x += (height - this.height) / 2
            this.y += (width - this.width) / 2
        }
        let canvas = createCanvas(this.width, this.height)
        let ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.width, this.height)
        let base64 = canvas.toDataURL('image/png')
        this.base64 = base64.substring(base64.indexOf(',') + 1)
    }

    draw(ctx) {
        return new Promise((resolve, reject) => {
            let img = loadImage(`data:image/png;base64,${this.base64}`)
            img.then(image => {
                ctx.drawImage(
                    image,
                    0,
                    0,
                    this.width,
                    this.height,
                    this.x,
                    this.y,
                    image.width,
                    image.height
                )
                resolve()
            }).catch(err => {
                reject(err)
            })
        })

    }
}