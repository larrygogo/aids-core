"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _psd = _interopRequireDefault(require("psd"));

var _layer = _interopRequireDefault(require("./base/layer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Parse {
  constructor(url) {
    let psd = _psd.default.fromFile(url);

    psd.parse();
    this.psd = psd.tree();
  }

  run() {
    this._parseNode();
  } // 解析节点


  _parseNode() {
    let children = this.psd.children();

    for (let [key, item] of children.entries()) {
      let nodeItem = item;
      let layer = new _layer.default(nodeItem);

      if (layer.type.category === 'text') {
        console.log(layer);
        break;
      }
    }
  }

}

exports.default = Parse;