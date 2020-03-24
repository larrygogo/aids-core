"use strict";

/**
 * Created by Gqb on 14/11/9.
 */
var parseHeader = require('./src/header'),
    parseColorMode = require('./src/colorMode'),
    parseImageResources = require('./src/imageResources'),
    parseLayerMaskInfo = require('./src/layerMaskInfo'),
    parseImageData = require('./src/imageData'),
    init = require('./src/init'),
    handle = require('./src/handler');

exports.parse = function (path) {
  var PSD = init(path);
  parseHeader(PSD);
  parseColorMode(PSD);
  parseImageResources(PSD);
  parseLayerMaskInfo(PSD);
  parseImageData(PSD);
  return handle(PSD);
}; //TODO 树形分层
//一些get方法，如链接图层
//文字图层的相应处理