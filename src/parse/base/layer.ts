import { LAYER_INFO } from "../config/layer.config"

export default abstract class Layer {
    public x: number
    public y: number
    public name: string
    public type: string
    public layer: string
    public width: number
    public height: number
    public zIndex: number
    public category: string

    constructor(layerNode) {
        this.x = layerNode.left
        this.y = layerNode.top
        this.width = layerNode.width
        this.height = layerNode.height
        this.name = layerNode.name
        this._getLayerInfo(layerNode.name)
    }

    private _getLayerInfo(name) {
        let layerInfo = LAYER_INFO[name]
        this.name = name
        this.type = layerInfo.type
        this.layer = layerInfo.name
        this.zIndex = layerInfo.zIndex
        this.category = layerInfo.category
    }

    static getLayerInfo(name): {name: string, zIndex: number, type: string, category: string} {
        return LAYER_INFO[name] || {name: null, zIndex: null, category: null}
    }

}