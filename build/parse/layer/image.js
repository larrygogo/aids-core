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
    super(layerNode);
    let image = this.layerNode.layer.image.toPng();
    this.toBase64(image).then(res => console.log(res)); // this.streamToBuffer(image, res => console.log(111,res))
    // image.pipe(fs.createWriteStream(`./${layerNode.name}.png`))
    // fs.writeFile(`./${layerNode.name}.png`, data, function (err) {
    //     if (err) {
    //         console.log("error");
    //     } else {
    //         console.log("ok");
    //     }
    // })
  }

  async getLayerTemplate() {
    return this.layerTemplate;
  }

  toBase64(image) {
    return new Promise((resolve, reject) => {
      const chunks = [];
      image.pack(); // [1]

      image.on('data', chunk => {
        chunks.push(chunk); // [2]
      });
      image.on('end', () => {
        resolve(`data:image/png;base64,${_buffer.Buffer.concat(chunks).toString('base64')}`); // [3]
      });
      image.on('error', err => {
        reject(err);
      });
    });
  }

}

exports.default = ImageLayer;