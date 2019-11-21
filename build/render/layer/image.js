"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layer = require("../base/layer");

var _canvas = require("canvas");

class ImageLayer extends _layer.Layer {
  constructor(layerNode) {
    super(layerNode);
    this.base64 = layerNode.base64;
  }

  draw(ctx) {
    return new Promise((resolve, reject) => {
      let img = (0, _canvas.loadImage)(`data:image/png;base64,${this.base64}`);
      img.then(image => {
        ctx.drawImage(image, 0, 0, this.width, this.height, this.x, this.y, image.width, image.height);
        resolve();
      });
    });
  }

}

exports.default = ImageLayer;