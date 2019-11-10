"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layer = require("../config/layer.config");

class Layer {
  constructor(layerNode) {
    this.layerNode = Object.assign({}, layerNode);
    this.x = layerNode.top;
    this.y = layerNode.left;
    this.width = layerNode.width;
    this.height = layerNode.height;
    this.name = layerNode.name;
    this.type = this.getLayerType(layerNode.name);
  }

  getLayerType(name) {
    return _layer.LAYER[name];
  }

  getLayerNode() {
    return this.layerNode;
  }

}

exports.default = Layer;