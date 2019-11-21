"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layer = void 0;

class Layer {
  constructor(layerNode) {
    this.x = layerNode.x;
    this.y = layerNode.y;
    this.name = layerNode.name;
    this.type = layerNode.type;
    this.layer = layerNode.layer;
    this.width = layerNode.width;
    this.height = layerNode.height;
    this.zIndex = layerNode.zIndex;
    this.category = layerNode.category;
  }
  /**
   * img 传入的Image对象
   * srcX 要剪裁的起始X坐标
   * srcY 要剪裁的起始Y坐标
   * srcW 要剪裁的宽度
   * srcH 要剪裁的高度
   * x 放置的x坐标
   * y 放置的y坐标
   * width 要使用的宽度
   * height 要使用的高度
   */


}

exports.Layer = Layer;