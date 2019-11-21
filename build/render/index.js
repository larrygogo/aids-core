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
    this._registerFont();

    this.template = template;
    this.options = options;
    this.canvas = (0, _canvas.createCanvas)(template.width, template.height);
    this.ctx = this.canvas.getContext('2d');
  }

  async run() {
    for (let item of this.template.layers) {
      if (item.type === 'image') {
        let layer = new _image.default(item);
        await layer.draw(this.ctx);
      } else {
        let layer = new _text.default(item);
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


  _registerFont() {
    const FONT = _path.default.resolve(__dirname, './font/'); // Register more font


    (0, _canvas.registerFont)(_path.default.join(FONT, 'msyh.ttf'), {
      family: 'MicrosoftYaHei'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, 'msyhbd.ttf'), {
      family: 'MicrosoftYaHei-Bold'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '方正粗圆简体.ttf'), {
      family: 'FZY4JW--GBK1-0'
    }); // [已经不可以了] 同一个字体可以以不同名称注册多次

    (0, _canvas.registerFont)(_path.default.join(FONT, '腾讯体-W7.otf'), {
      family: 'TTTGBMedium'
    }); // registerFont(path.join(FONT, '腾讯体-W7.otf'), { family: 'TencentSansW7' });
    // registerFont(path.join(FONT, '方正正黑简体.ttf'), { family: 'FZZHJW' });

    (0, _canvas.registerFont)(_path.default.join(FONT, '方正正黑简体.ttf'), {
      family: 'FZZHJW--GB1-0'
    }); // registerFont(path.join(FONT, '方正正纤黑简体.ttf'), { family: 'FZZXHJW' });

    (0, _canvas.registerFont)(_path.default.join(FONT, '方正正纤黑简体.ttf'), {
      family: 'FZZXHJW--GB1-0'
    }); // registerFont(path.join(FONT, '方正正中黑简体.ttf'), { family: 'FZZZHONGJW' });

    (0, _canvas.registerFont)(_path.default.join(FONT, '方正正中黑简体.ttf'), {
      family: 'FZZZHONGJW--GB1-0'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '方正兰亭黑简体.ttf'), {
      family: 'FZLTHK--GBK1-0'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '方正兰亭中黑简体.ttf'), {
      family: 'FZLTZHK--GBK1-0'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '方正兰亭大黑简体.ttf'), {
      family: 'FZDHTJW--GB1-0'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '方正尚酷简体.ttf'), {
      family: 'FZSKJW--GB1-0'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '方正粗宋简体.ttf'), {
      family: 'FZCSJW--GBK1-0'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '方正粗圆简体.ttf'), {
      family: 'FZY4JW--GBK1-0'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '方正舒体简体.ttf'), {
      family: 'FZSTK--GBK1-0'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '方正汉真广标简体.ttf'), {
      family: 'FZHZGBJW--GBK1-0'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '汉仪菱心体简.ttf'), {
      family: 'HYk2gj'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '汉仪综艺体简.ttf'), {
      family: 'HYk1gj'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, '汉仪大宋简.ttf'), {
      family: 'HYa4gj'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, 'SourceHanSansCN-ExtraLight.otf'), {
      family: 'SourceHanSansCN-ExtraLight'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, 'SourceHanSansCN-Light.otf'), {
      family: 'SourceHanSansCN-Light'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, 'SourceHanSansCN-Normal.otf'), {
      family: 'SourceHanSansCN-Normal'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, 'SourceHanSansCN-Regular.otf'), {
      family: 'SourceHanSansCN-Regular'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, 'SourceHanSansCN-Medium.otf'), {
      family: 'SourceHanSansCN-Medium'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, 'SourceHanSansCN-Bold.otf'), {
      family: 'SourceHanSansCN-Bold'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, 'SourceHanSansCN-Heavy.otf'), {
      family: 'SourceHanSansCN-Heavy'
    });
    (0, _canvas.registerFont)(_path.default.join(FONT, 'PingFang-SC-Regular.ttf'), {
      family: 'PingFang-SC-Regular'
    });
  }

}

exports.default = Render;