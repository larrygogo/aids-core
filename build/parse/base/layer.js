"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layer = require("../config/layer.config");

class Layer {
  layerTemplate = {};

  constructor(layerNode) {
    this.layerNode = Object.assign({}, layerNode);
    this.x = layerNode.top;
    this.y = layerNode.left;
    this.width = layerNode.width;
    this.height = layerNode.height;
    this.name = layerNode.name;
    this.layerInfo = this._getLayerInfo(layerNode.name);
    this.layerTemplate = {
      name: this.name,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      layerInfo: this.layerInfo
    };
  }

  _getLayerInfo(name) {
    return _layer.LAYER_INFO[name];
  }

  getLayerNode() {
    return this.layerNode;
  }

  getLayerTemplate() {
    return this.layerTemplate;
  }

}

exports.default = Layer;