const path = require('path')
const {Parse, Render} = require('../build/index')

const parse = new Parse(path.resolve(__dirname, './test.psd'))
parse.getTemplate()
// const render = new Render()