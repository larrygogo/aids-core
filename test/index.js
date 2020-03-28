const fs = require('fs')
const fonts = require('./font')
const path = require('path')
const {
    Parse,
    Render
} = require('../build/index')


// 测试psd-parser
const parse = new Parse(path.resolve(__dirname, './static/test4.psd'))
console.log('--- 开始解析 ---')
console.time('解析耗时')
let res = parse.getTemplate()
parse.saveCover(__dirname + "123.png")
fs.writeFileSync(path.join(__dirname, './static/test.json'), JSON.stringify(res))
console.timeEnd('解析耗时')
console.log('--- 解析成功 ---')
const render = new Render(res, {
    outPath: path.join(__dirname, '/static/test.png'),
    bodyImage: path.join(__dirname, '/static/p1.png'),
    mainText: '全球狂欢节',
    subText: '电子数码年中备货节',
    actionText: '销量突破千万件',
    font: fonts
})
console.log('--- 开始渲染 ---')
console.time('渲染耗时')
render.run()
console.timeEnd('渲染耗时') 
console.log('--- 渲染成功 ---')