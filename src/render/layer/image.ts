import { Layer } from "../base/layer";
import { LayerNodeInterface } from "../../types";

export default class ImageLayer extends Layer {
    public base64: string

    constructor(layerNode: LayerNodeInterface) {
        super(layerNode)
        this.base64 = layerNode.base64
    }

    draw(ctx) {
        return new Promise((resolve, reject) => {
            let img = new Image()
            img.src = `data:image/png;base64,${this.base64}`
            img.onload = () => {
                ctx.drawImage(
                    img,
                    this.x,
                    this.y,
                    this.width,
                    this.height,
                    0,
                    0,
                    img.width,
                    img.height
                )
                resolve()
            }

            img.onerror = (err) => {
                reject(err)
            }
        })
        
    }
}