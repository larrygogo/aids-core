"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layer = require("../config/layer.config");

class Layer {
  constructor(layerNode) {
    this.x = layerNode.top;
    this.y = layerNode.left;
    this.width = layerNode.width;
    this.height = layerNode.height;
    this.name = layerNode.name;

    this._getLayerInfo(layerNode.name);
  }

  _getLayerInfo(name) {
    let layerInfo = _layer.LAYER_INFO[name];
    this.name = name;
    this.type = layerInfo.type;
    this.layer = layerInfo.name;
    this.zIndex = layerInfo.zIndex;
    this.category = layerInfo.category;
  }

  static getLayerInfo(name) {
    return _layer.LAYER_INFO[name] || {
      name: null,
      zIndex: null,
      category: null
    };
  }

}

exports.default = Layer;