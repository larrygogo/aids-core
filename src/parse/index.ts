import PSD from 'psd'
import ImageLayer from './layer/image';
import TextLayer from './layer/text';
import Template from './base/template';
import Layer from './base/layer';

export default class Parse {
    private psd
    private template

    constructor(url) {
        let psd = PSD.fromFile(url);
        psd.parse()
        this.psd = psd.tree()
        this.template = new Template(url, this.psd.coords.right - this.psd.coords.left, this.psd.coords.bottom - this.psd.coords.top)
    }

    async getTemplate() {
        await this._parseNode()
        return this.template
    }

    // 解析节点
    private async _parseNode() {
        let children = this.psd.children()
        children.reverse()
        for (let [key, item] of children.entries()) {
            let layer, 
                layerInfo = Layer.getLayerInfo(item.name)
            if(layerInfo.type && layerInfo.type === 'text') {
                layer = await TextLayer.createLayer(item)
            } else if(layerInfo.type && layerInfo.type === 'image') {
                layer = await ImageLayer.createLayer(item)
            }
            this.template.addLayer(layer)
        }
    }
}