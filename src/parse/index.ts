import PSD from 'psd'
import ImageLayer from './layer/image';
import TextLayer from './layer/text';
import Template from './base/template';
import Layer from './base/layer';
import { Buffer } from 'buffer';

export default class Parse {
    private url
    private psd
    private template

    constructor(url) {
        this.url = url
        let psd = PSD.fromFile(url);
        psd.parse()
        this.psd = psd.tree()
        this.template = new Template(url, this.psd.coords.right - this.psd.coords.left, this.psd.coords.bottom - this.psd.coords.top)
    }

    async getBase64() {
        let url = this.url
        let psd = PSD.fromFile(url);
        psd.parse();
        let image = psd.image.toPng()
        return new Promise((resolve, reject) => {
            let buffers = [];
            image.pack();  // [1]
            image.on('data', (chunk) => {
                buffers.push(chunk);  // [2]
            });
            image.on('end', () => {
                resolve(`data:image/png;base64,${Buffer.concat(buffers).toString('base64')}`);  // [3]
            });
            image.on('error', (err) => {
                reject(err);
            });
        });

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
            if (layerInfo.type && layerInfo.type === 'text') {
                layer = await TextLayer.createLayer(item)
            } else if (layerInfo.type && layerInfo.type === 'image') {
                layer = await ImageLayer.createLayer(item)
            }
            this.template.addLayer(layer)
        }
    }
}