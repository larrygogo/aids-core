import PSD from 'psd'
import ImageLayer from './layer/image';
import { LAYER } from './config/layer.config';
import TextLayer from './layer/text';

export default class Parse {
    private psd
    private template

    constructor(url) {
        let psd = PSD.fromFile(url);
        psd.parse()
        this.psd = psd.tree()
    }

    getTemplate() {
        this._parseNode()
        return this.template
    }

    // 解析节点
    private _parseNode() {
        let children = this.psd.children()
        for (let [key, item] of children.entries()) {
            let type = this._getLayerType(item.name)
            if(type.category === 'text') {
                let layer = new TextLayer(item)
            } else {
                let layer = new ImageLayer(item)
            }
        }
    }

    private _getLayerType(name): {name: string, zIndex: number, category: string} {
        return LAYER[name]
    }
}