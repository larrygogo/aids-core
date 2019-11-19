"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buffer = require("buffer");

var _layer = _interopRequireDefault(require("../base/layer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ImageLayer extends _layer.default {
  constructor(layerNode) {
    super(layerNode); // this.toBase64().then(base64 => {
    //     this.base64 = base64
    // })
  }

  static async createLayer(layerNode) {
    let imageLayer = new ImageLayer(layerNode);
    imageLayer.base64 = await imageLayer.toBase64(layerNode); // imageLayer.base64 = "#### base64 ####"

    return imageLayer;
  }

  toBase64(layerNode) {
    let image = layerNode.layer.image.toPng();
    return new Promise((resolve, reject) => {
      const chunks = [];
      image.pack(); // [1]

      image.on('data', chunk => {
        chunks.push(chunk); // [2]
      });
      image.on('end', () => {
        resolve(`${_buffer.Buffer.concat(chunks).toString('base64')}`); // [3]
        // resolve(`data:image/png;base64,${Buffer.concat(chunks).toString('base64')}`);  // [3]
      });
      image.on('error', err => {
        reject(err);
      });
    });
  }

}

exports.default = ImageLayer;