"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layer = require("../base/layer");

class ImageLayer extends _layer.Layer {
  constructor(layerNode) {
    super(layerNode);
    this.letterSpacing = layerNode.letterSpacing;
    this.fontFamily = layerNode.fontFamily;
    this.fontSize = layerNode.fontSize;
    this.color = layerNode.color;
    this.value = layerNode.value;
  }

  draw(ctx) {
    ctx.textBaseline = 'ideographic';
    return new Promise((resolve, reject) => {
      ctx.font = `${this.fontSize}px "${this.fontFamily}"`; // ctx.textAlign = this.alignment;

      ctx.letterSpacing = this.letterSpacing;
      ctx.fillStyle = `rgb(${this.color.toString()})`;
      ctx.fillText = this._fillText(ctx);
      ctx.fillText(this.value, this.x, this.y);
      resolve();
    });
  } // 由于canvas本身不支持字间距，此处重写fillText方法


  _fillText(ctx) {
    let _fillText = ctx.__proto__.fillText,
        __slice = [].slice;
    return function () {
      let args,
          offset,
          str,
          x,
          y,
          _this = this;

      str = arguments[0], x = arguments[1], y = arguments[2], args = 4 <= arguments.length ? __slice.call(arguments, 3) : [];

      if (_this.letterSpacing == null || _this.letterSpacing === 0) {
        let a = [str, x, y].concat(args);
        return _fillText.apply(this, a);
      }

      offset = -(_this.letterSpacing + _this.measureText(str[0]).width) / 2; // if (_this.textAlign === 'center') {
      //     offset = -(str.length * _this.letterSpacing + _this.measureText(str).width) / 2;
      // } else if (_this.textAlign === 'right') {
      //     offset = -(str.length * _this.letterSpacing + _this.measureText(str).width - _this.measureText(str[0]).width / 2);
      // }

      for (let i in str) {
        offset += Math.round(_this.measureText(str[i]).width) / 2;

        _fillText.apply(this, [str[i], x + offset, y].concat(args));

        offset += Math.round(_this.measureText(str[i]).width) / 2;
        offset += _this.letterSpacing;
      }
    };
  }

}

exports.default = ImageLayer;