import { Layer } from "../base/layer";
import { createCanvas, createImageData } from 'canvas'
import { ImageLayerInterface } from "../../types";

export default class ImageLayer extends Layer {
    public imageData: Array<number>

    constructor(layerNode: ImageLayerInterface) {
        super(layerNode)
        this.imageData = layerNode.imageData
    }

    resize(img) {
        let { width, height } = this
        let itemRatio = width / height
        let sizeRatio = img.width / img.height
        if (sizeRatio < itemRatio) {
            this.width = height / img.height * img.width
            this.x -= (this.width - width) / 2
        } else {
            this.height = width / img.width * img.height
            this.y -= (this.height - height) / 2
        }
    }

    draw(ctx) {
        const palette = new Uint8ClampedArray(this.imageData)
        let canvas = createCanvas(this.width, this.height)
        let imageData = createImageData(palette, this.width, this.height)
        let context = canvas.getContext('2d')
        context.putImageData(imageData, 0, 0)
        ctx.drawImage(
            canvas,
            0,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            canvas.width,
            canvas.height
        )

    }
}