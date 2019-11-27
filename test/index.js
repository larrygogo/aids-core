const fs = require('fs')
const fonts = require('./font')
const path = require('path')
const {
    Parse,
    Render
} = require('../build/index')


// 测试psd-parser
const parse = new Parse(path.resolve(__dirname, './static/test.psd'))
console.log('--- 开始解析 ---')
console.time('解析耗时')
let res = parse.getTemplate()
fs.writeFileSync(path.join(__dirname, './static/test.json'), JSON.stringify(res))
console.timeEnd('解析耗时')
console.log('--- 解析成功 ---')

const render = new Render(res, {
    outPath: path.join(__dirname, '/static/test.png'),
    bodyImage: path.join(__dirname, '/static/p1.png'),
    mainText: '骑上我心爱小摩托',
    subText: '它拥有不会易堵车',
    actionText: '啦啦啦啦',
    font: fonts
})
console.log('--- 开始渲染 ---')
console.time('渲染耗时')
render.run()
console.timeEnd('渲染耗时') 
console.log('--- 渲染成功 ---')