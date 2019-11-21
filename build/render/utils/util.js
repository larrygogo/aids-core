"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageToBase64 = imageToBase64;

var _canvas = require("canvas");

function imageToBase64(img, outputFormat) {
  let canvas = (0, _canvas.createCanvas)(img.width, img.height);
  let ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL(outputFormat || 'image/jpg');
}