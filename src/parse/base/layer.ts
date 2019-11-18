import { LAYER_INFO } from "../config/layer.config"

export default abstract class Layer {
    public x: number
    public y: number
    public width: number
    public height: number
    public name: string
    public layerInfo: {name: string, zIndex: number, type: string, category: string}
    protected layerNode: object
    protected layerTemplate = {}


    constructor(layerNode) {
        this.layerNode = Object.assign({}, layerNode)
        this.x = layerNode.top
        this.y = layerNode.left
        this.width = layerNode.width
        this.height = layerNode.height
        this.name = layerNode.name
        this.layerInfo = this._getLayerInfo(layerNode.name)
        this.layerTemplate = {
            name: this.name,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            layerInfo: this.layerInfo
        }
    }

    private _getLayerInfo(name): {name: string, zIndex: number, type: string, category: string} {
        return LAYER_INFO[name]
    }

    getLayerNode() {
        return this.layerNode
    }

    getLayerTemplate() {
        return this.layerTemplate
    }
}