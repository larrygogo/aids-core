"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layer = _interopRequireDefault(require("../base/layer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ImageLayer extends _layer.default {
  constructor(layerNode) {
    super(layerNode); // fs.writeFile(`./${layerNode.name}.png`, data, function (err) {
    //     if (err) {
    //         console.log("error");
    //     } else {
    //         console.log("ok");
    //     }
    // })
  }

  async getLayerTemplate() {
    let image = this.layerNode.layer.image.toPng();
    image.pipe(function (dest) {
      this.on = function () {
        console.log(dest);
      };
    });
    return this.layerTemplate;
  }

}

exports.default = ImageLayer;