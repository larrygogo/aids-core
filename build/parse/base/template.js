"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Template {
  layers = [];

  constructor(src, width, height, name, md5) {
    this.src = src;
    this.width = width;
    this.height = height;
    this.name = name;
    this.md5 = md5;
  }

  addLayer(layer) {
    this.layers.push(layer);
  }

}

exports.default = Template;