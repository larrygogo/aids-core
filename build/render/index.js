"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _canvas = require("canvas");

var _image = _interopRequireDefault(require("./layer/image"));

var _text = _interopRequireDefault(require("./layer/text"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Render {
  constructor(template, options) {
    if (options.font) {
      this._registerFont(options.font.dir, options.font.list);
    }

    this.template = template;
    this.options = options;
    this.canvas = (0, _canvas.createCanvas)(template.width, template.height);
    this.ctx = this.canvas.getContext('2d');
  }

  async run() {
    for (let item of this.template.layers) {
      if (item.type === 'image') {
        let layer = new _image.default(item);

        if (item.layer === 'body' && this.options.bodyImage) {
          let image = await (0, _canvas.loadImage)(this.options.bodyImage);
          layer.resize(image);
        }

        await layer.draw(this.ctx);
      } else if (item.type === 'text') {
        let layer = new _text.default(item);

        if (item.layer === 'text_action' && this.options.actionText) {
          layer.changeValue(this.options.actionText);
        } else if (item.layer === 'text_main' && this.options.actionText) {
          layer.changeValue(this.options.mainText);
        } else if (item.layer === 'text_sub' && this.options.actionText) {
          layer.changeValue(this.options.subText);
        }

        await layer.draw(this.ctx);
      }
    }

    let buf = this.canvas.toBuffer();

    if (!!this.options.outPath) {
      _fs.default.writeFileSync(this.options.outPath, buf);
    } else {
      return buf;
    }
  }
  /**
  * 注册字体
  */


  _registerFont(dir, fontList) {
    // Register more font
    fontList.forEach(item => {
      (0, _canvas.registerFont)(_path.default.join(dir, item.path), {
        family: item.family
      });
    });
  }

}

exports.default = Render;