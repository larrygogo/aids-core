"use strict";

const LAYER = {
  "背景": {
    type: "background_pure",
    zIndex: 1,
    category: "bg"
  },
  "背景纹理": {
    type: "background_texture",
    zIndex: 2,
    category: "bg"
  },
  "背景修饰": {
    type: "background_decoration",
    zIndex: 3,
    category: "bg"
  },
  "贴边修饰": {
    type: "decoration_hem",
    zIndex: 4,
    category: "bg"
  },
  "碎片修饰": {
    type: "decoration_fragment",
    zIndex: 5,
    category: "bg"
  },
  "主体区域修饰": {
    type: "decoration_region_body",
    zIndex: 6,
    category: "body"
  },
  "主体": {
    type: "body",
    zIndex: 7,
    category: "body"
  },
  "主体修饰": {
    type: "decoration_body",
    zIndex: 8,
    category: "bg"
  },
  "文案区域修饰": {
    type: "decoration_region_text",
    zIndex: 9,
    category: "bg"
  },
  "行动点修饰": {
    type: "decoration_text_action",
    zIndex: 10,
    category: "text"
  },
  "行动点文案": {
    type: "text_action",
    zIndex: 11,
    category: "text"
  },
  "副文案": {
    type: "text_sub",
    zIndex: 12,
    category: "text"
  },
  "主文案": {
    type: "text_main",
    zIndex: 13,
    category: "text"
  }
};