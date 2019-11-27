"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layer = require("../config/layer.config");

class Layer {
  constructor(layerNode) {
    this.x = layerNode.left;
    this.y = layerNode.top;
    this.width = layerNode.width;
    this.height = layerNode.height;
    this.name = layerNode.additional.luni;

    this._setLayerInfo(layerNode.additional.luni);
  }

  static getLayerInfo(name) {
    return _layer.LAYER_INFO[name] || {
      name: null,
      type: null,
      zIndex: null,
      category: null
    };
  }

  _setLayerInfo(name) {
    let layerInfo = Layer.getLayerInfo(name);
    this.name = name;
    this.type = layerInfo.type;
    this.layer = layerInfo.name;
    this.zIndex = layerInfo.zIndex;
    this.category = layerInfo.category;
  }

}

exports.default = Layer;