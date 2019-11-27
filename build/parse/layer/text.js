"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layer = _interopRequireDefault(require("../base/layer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TextLayer extends _layer.default {
  constructor(layerNode) {
    super(layerNode);
    let wordSnippets = layerNode.get('wordSnippets');
    this.text = {
      fontWeight: wordSnippets[0]['font-weight'],
      fontStyle: wordSnippets[0]['font-style'],
      fontFamily: wordSnippets[0]['font-family'],
      fontSize: wordSnippets[0]['font-size'],
      opacity: wordSnippets[0]['opacity'],
      color: wordSnippets[0]['color'],
      letterSpacing: wordSnippets[0]['letter-spacing'],
      marginLeft: wordSnippets[0]['margin-left'],
      lineHeight: wordSnippets[0]['line-height'],
      textDecoration: wordSnippets[0]['text-decoration'],
      value: wordSnippets[0]['text']
    };
    wordSnippets.forEach(item => {
      this.text.value += item.text;
    });
  }

  toLayer() {
    return this;
  }

}

exports.default = TextLayer;