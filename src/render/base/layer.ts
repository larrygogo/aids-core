import { LayerNodeInterface } from "../../types"

export abstract class Layer {
    public x: number
    public y: number
    public name: string
    public type: string
    public layer: string
    public width: number
    public height: number
    public zIndex: number
    public category: string

    constructor(layerNode: LayerNodeInterface) {
        this.x        = layerNode.x
        this.y        = layerNode.y
        this.name     = layerNode.name
        this.type     = layerNode.type
        this.layer    = layerNode.layer
        this.width    = layerNode.width
        this.height   = layerNode.height
        this.zIndex   = layerNode.zIndex
        this.category = layerNode.category
    }

    /**
     * img 传入的Image对象
     * srcX 要剪裁的起始X坐标
     * srcY 要剪裁的起始Y坐标
     * srcW 要剪裁的宽度
     * srcH 要剪裁的高度
     * x 放置的x坐标
     * y 放置的y坐标
     * width 要使用的宽度
     * height 要使用的高度
     */
    abstract draw(ctx);
}
