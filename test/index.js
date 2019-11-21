const fs = require('fs')
const path = require('path')
const {Parse, Render} = require('../build/index')
const sizeOf = require('image-size');

// 解析并导出JSON文件
// const parse = new Parse(path.resolve(__dirname, './static/test.psd'))
// parse.getTemplate().then(res => {fs.writeFileSync(path.resolve(__dirname, 'static/test.json'), `${JSON.stringify(res, null, 4)}`))


// 获取base64中的图片大小
// const parse = new Parse(path.resolve(__dirname, './static/test.psd'))
// parse.getTemplate().then(res => {
//   let template = res 
//   for(let [key, item] of template.layers.entries()) {
//     if(item.type === 'image') {
//       let image = sizeOf(new Buffer(item.base64,'base64'))
//       console.log(item.name, image)
//     }
//   }
// })


// 渲染
const parse = new Parse(path.resolve(__dirname, './static/test.psd'))
parse.getTemplate().then(res => {
  const render = new Render(res, {
    outPath: path.join(__dirname, '/static/test.png')
  })
  console.log('开始渲染', path.join(__dirname, '/static/test.png'))
  render.run().then(() => {
    console.log('渲染成功')
  })
})
