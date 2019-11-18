import PSD from 'psd'
import ImageLayer from './layer/image';
import { LAYER_INFO } from './config/layer.config';
import TextLayer from './layer/text';
import Template from './base/template';

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
        this._parseNode()
        return this.template
    }

    // 解析节点
    private _parseNode() {
        let children = this.psd.children()
        children.reverse()
        let i = 0
        for (let [key, item] of children.entries()) {
            let layer, 
                layerInfo = this._getLayerInfo(item.name)
            if(layerInfo.type && layerInfo.type === 'text') {
                layer = new TextLayer(item)
            } else if(layerInfo.type && layerInfo.type === 'image') {
                layer = new ImageLayer(item)
                i ++ 
                if(i === 2) {
                    break

                }
            }
            layer.getLayerTemplate().then(layerTemplate => this.template.addLayer(layerTemplate))
        }
    }

    private _getLayerInfo(name): {name: string, zIndex: number, type: string, category: string} {
        return LAYER_INFO[name] || {name: null, zIndex: null, category: null}
    }
}