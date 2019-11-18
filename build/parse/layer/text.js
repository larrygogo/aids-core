"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layer = _interopRequireDefault(require("../base/layer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TextLayer extends _layer.default {
  constructor(layerNode) {
    super(layerNode);
    let textNode = layerNode.export();
    this.value = textNode.text.value;
    this.letterSpacing = this._getBytesCount(textNode.text.value);
    this.color = textNode.text.font.colors[0] || [0, 0, 0, 255];
    this.fontFamily = textNode.text.font.name;
    this.fontSize = this._getFontSize(textNode);
    Object.assign(this.layerTemplate, {
      value: this.value,
      letterSpacing: this.letterSpacing,
      color: this.color,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize
    });
  } // 获取字符串的字节数


  _getBytesCount(str) {
    let bytesCount = 0;

    for (let i = 0; i < str.length; i++) {
      let c = str.charAt(i);

      if (/^[\u0000-\u00ff]$/.test(c)) {
        //匹配单字节
        bytesCount += 1;
      } else {
        bytesCount += 2;
      }
    }

    return bytesCount / 2;
  }

  _getFontSize(textNode) {
    let transY = textNode.text.transform.yy,
        sizes = textNode.text.font.sizes;
    return Math.round(sizes[0] * transY * 100) * 0.01;
  }

}

exports.default = TextLayer;