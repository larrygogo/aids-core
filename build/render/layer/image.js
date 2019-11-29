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

  resize(img) {
    let {
      width,
      height
    } = this;
    console.log(width, height);
    let itemRatio = width / height;
    let sizeRatio = img.width / img.height;

    if (sizeRatio < itemRatio) {
      this.width = height / img.height * img.width;
      this.x -= (this.width - width) / 2;
      console.log(111);
    } else {
      this.height = width / img.width * img.height;
      this.y -= (this.height - height) / 2;
      console.log(222);
    }

    let canvas = (0, _canvas.createCanvas)(this.width, this.height);
    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.width, this.height);
    let base64 = canvas.toDataURL('image/png');
    this.base64 = base64.substring(base64.indexOf(',') + 1);
  }

  draw(ctx) {
    return new Promise((resolve, reject) => {
      let img = (0, _canvas.loadImage)(`data:image/png;base64,${this.base64}`);
      img.then(image => {
        ctx.drawImage(image, 0, 0, this.width, this.height, this.x, this.y, image.width, image.height);
        resolve();
      }).catch(err => {
        reject(err);
      });
    });
  }

}

exports.default = ImageLayer;