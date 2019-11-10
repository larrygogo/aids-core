"use strict";

class Layer {
  constructor(layerNode) {
    this.x = layerNode.x;
    this.y = layerNode.y;
    this.width = layerNode.width;
    this.height = layerNode.height;
    this.name = layerNode.name;
    this.type = this.getLayerType(layerNode.name);
  }

  getLayerType(name) {
    return LAYER[name];
  }

  getLayerNode() {
    return this.layerNode;
  }

}