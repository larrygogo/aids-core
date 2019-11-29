"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _psd = _interopRequireDefault(require("psd"));

var _image = _interopRequireDefault(require("./layer/image"));

var _text = _interopRequireDefault(require("./layer/text"));

var _template = _interopRequireDefault(require("./base/template"));

var _layer = _interopRequireDefault(require("./base/layer"));

var _buffer = require("buffer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Parse {
  constructor(url) {
    this.url = url;

    let psd = _psd.default.fromFile(url);

    psd.parse();
    this.psd = psd.tree();
    this.template = new _template.default(url, this.psd.coords.right - this.psd.coords.left, this.psd.coords.bottom - this.psd.coords.top);
  }

  async getBase64() {
    let url = this.url;

    let psd = _psd.default.fromFile(url);

    psd.parse();
    let image = psd.image.toPng();
    return new Promise((resolve, reject) => {
      let buffers = [];
      image.pack(); // [1]

      image.on('error', reject);
      image.on('data', data => buffers.push(data));
      image.on('end', () => resolve('data:image/png;base64,' + _buffer.Buffer.concat(buffers)));
    });
  }

  async getTemplate() {
    await this._parseNode();
    return this.template;
  } // 解析节点


  async _parseNode() {
    let children = this.psd.children();
    children.reverse();

    for (let [key, item] of children.entries()) {
      let layer,
          layerInfo = _layer.default.getLayerInfo(item.name);

      if (layerInfo.type && layerInfo.type === 'text') {
        layer = await _text.default.createLayer(item);
      } else if (layerInfo.type && layerInfo.type === 'image') {
        layer = await _image.default.createLayer(item);
      }

      this.template.addLayer(layer);
    }
  }

}

exports.default = Parse;