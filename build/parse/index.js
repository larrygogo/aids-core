"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _psd = _interopRequireDefault(require("psd"));

var _image = _interopRequireDefault(require("./layer/image"));

var _layer = require("./config/layer.config");

var _text = _interopRequireDefault(require("./layer/text"));

var _template = _interopRequireDefault(require("./base/template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Parse {
  constructor(url) {
    let psd = _psd.default.fromFile(url);

    psd.parse();
    this.psd = psd.tree();
    this.template = new _template.default(url, this.psd.coords.right - this.psd.coords.left, this.psd.coords.bottom - this.psd.coords.top);
  }

  async getTemplate() {
    this._parseNode();

    return this.template;
  } // 解析节点


  _parseNode() {
    let children = this.psd.children();
    children.reverse();
    let i = 0;

    for (let [key, item] of children.entries()) {
      let layer,
          layerInfo = this._getLayerInfo(item.name);

      if (layerInfo.type && layerInfo.type === 'text') {
        layer = new _text.default(item);
      } else if (layerInfo.type && layerInfo.type === 'image') {
        layer = new _image.default(item);
        i++;

        if (i === 2) {
          break;
        }
      }

      layer.getLayerTemplate().then(layerTemplate => this.template.addLayer(layerTemplate));
    }
  }

  _getLayerInfo(name) {
    return _layer.LAYER_INFO[name] || {
      name: null,
      zIndex: null,
      category: null
    };
  }

}

exports.default = Parse;