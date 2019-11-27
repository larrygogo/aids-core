import { LAYER_INFO } from "../config/layer.config"
import { LayerInterface, LayerInfoInterface } from "../../types"

export default abstract class Layer implements LayerInterface{
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
        this.name = layerNode.additional.luni
        this._setLayerInfo(layerNode.additional.luni)
    }

    static getLayerInfo(name): LayerInfoInterface {
        return LAYER_INFO[name] || {name: null, type: null, zIndex: null, category: null}
    }

    private _setLayerInfo(name) {
        let layerInfo = Layer.getLayerInfo(name)
        this.name = name
        this.type = layerInfo.type
        this.layer = layerInfo.name
        this.zIndex = layerInfo.zIndex
        this.category = layerInfo.category
    }    
}