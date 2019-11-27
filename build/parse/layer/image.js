"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layer = _interopRequireDefault(require("../base/layer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ImageLayer extends _layer.default {
  constructor(layerNode) {
    super(layerNode);
    this.imageData = layerNode.parseImageData();
  }

  toLayer() {
    return this;
  }

}

exports.default = ImageLayer;