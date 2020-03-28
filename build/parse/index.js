"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _psdParser = _interopRequireDefault(require("../lib/psd-parser"));

var _image = _interopRequireDefault(require("./layer/image"));

var _text = _interopRequireDefault(require("./layer/text"));

var _template = _interopRequireDefault(require("./base/template"));

var _layer = _interopRequireDefault(require("./base/layer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Parse {
  constructor(url) {
    let psd = _psdParser.default.parse(url);

    this.psd = psd;
    this._layers = psd.getDescendants();
    this._psd = psd._psd_;
    this.slices = psd.getSlices();
    this._template = new _template.default(url, this._psd.header.width, this._psd.header.height);
  }

  getTemplate() {
    this._parseNode();

    return this._template;
  }

  saveCover(path) {
    this._psd.imageData.saveAsPng(path);
  } // 解析节点


  _parseNode() {
    for (let item of this._layers) {
      let layer,
          layerInfo = _layer.default.getLayerInfo(item.additional.luni);

      if (layerInfo.type && layerInfo.type === 'text') {
        //  查看字体
        layer = new _text.default(item);
      } else if (layerInfo.type && layerInfo.type === 'image') {
        layer = new _image.default(item);
      }

      let layerNode = layer.toLayer();

      this._template.addLayer(layerNode);
    }
  }

}

exports.default = Parse;