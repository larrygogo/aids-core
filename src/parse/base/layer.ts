import { LAYER } from "../config/layer.config"

export default abstract class Layer {
    public x: number
    public y: number
    public width: number
    public height: number
    public name: string
    public type: {name: string, zIndex: number, category: string}
    private layerNode: object


    constructor(layerNode) {
        this.layerNode = Object.assign({}, layerNode)
        this.x = layerNode.top
        this.y = layerNode.left
        this.width = layerNode.width
        this.height = layerNode.height
        this.name = layerNode.name
        this.type = this._getLayerType(layerNode.name)
    }

    private _getLayerType(name): {name: string, zIndex: number, category: string} {
        return LAYER[name]
    }

    getLayerNode() {
        return this.layerNode
    }

    abstract getLayerTemplate()
}