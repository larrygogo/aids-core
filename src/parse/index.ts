import PSD from '../lib/psd-parser';
import ImageLayer from './layer/image';
import TextLayer from './layer/text';
import Template from './base/template';
import Layer from './base/layer';

export default class Parse {
    private psd
    private _psd
    private _layers
    public _template
    public slices

    constructor(url) {
        let psd = PSD.parse(url);
        this.psd = psd
        this._layers = psd.getDescendants()
        this._psd = psd._psd_
        this.slices  = psd.getSlices()
        this._template = new Template(url, this._psd.header.width, this._psd.header.height)
    }

    getTemplate() {
        this._parseNode()
        return this._template
    }

    saveCover(path) {
        this._psd.imageData.saveAsPng(path)
    }

    // 解析节点
    private _parseNode() {
        for (let item of this._layers) {
            let layer,
                layerInfo = Layer.getLayerInfo(item.additional.luni)
            if (layerInfo.type && layerInfo.type === 'text') {
                //  查看字体
                layer = new TextLayer(item)
            } else if (layerInfo.type && layerInfo.type === 'image') {
                layer = new ImageLayer(item)
            }
            let layerNode = layer.toLayer()
            this._template.addLayer(layerNode)
        }
    }
}