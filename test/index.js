const fs = require('fs')
const path = require('path')
const {Parse, Render} = require('../build/index')

// 解析并导出JSON文件
// const parse = new Parse(path.resolve(__dirname, './static/test.psd'))
// parse.getTemplate().then(res => {fs.writeFileSync(path.resolve(__dirname, 'static/test.json'), `${JSON.stringify(res, null, 4)}`))


// 渲染
console.log('--- 开始解析 ---')
console.time('解析耗时')  
const parse = new Parse(path.resolve(__dirname, './static/test3.psd'))
parse.getTemplate().then(res => {
  console.timeEnd('解析耗时') 
  console.log('--- 解析成功 ---')
  const render = new Render(res, {
    outPath: path.join(__dirname, '/static/test.png'),
    bodyImage: path.join(__dirname, '/static/p1.png'),
  })
  console.log('--- 开始渲染 ---')
  console.time('总耗时')  
  render.run().then(() => {
    console.timeEnd('总耗时') 
    console.log('--- 渲染成功 ---')
  })
})

