import { Layer } from "../base/layer";
import { loadImage } from 'canvas'
import { LayerNodeInterface } from "../../types";

export default class ImageLayer extends Layer {
    public base64: string

    constructor(layerNode: LayerNodeInterface) {
        super(layerNode)
        this.base64 = layerNode.base64
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
            })
        })

    }
}