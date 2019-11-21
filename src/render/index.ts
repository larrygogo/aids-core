import { Canvas, createCanvas, registerFont, loadImage } from 'canvas';
import { TemplateInterface, RenderOptions } from '../types';
import ImageLayer from './layer/image';
import TextLayer from './layer/text';
import path from 'path';
import fs from 'fs';
import { imageToBase64 } from './utils/util';



export default class Render {
    public template: TemplateInterface
    public options: RenderOptions
    public canvas: Canvas
    public ctx: any

    constructor(template: TemplateInterface, options: RenderOptions) {
        this._registerFont()
        this.template = template
        this.options = options
        this.canvas = createCanvas(template.width, template.height);
        this.ctx = this.canvas.getContext('2d');
    }

    async run() {
        for (let item of this.template.layers) {
            if (item.type === 'image') {
                let layer = new ImageLayer(item)
                if(item.layer === 'body' && this.options.bodyImage) {
                    let image = await loadImage(this.options.bodyImage)
                    layer.resize(image)
                }
                await layer.draw(this.ctx)
                
            } else {
                let layer = new TextLayer(item)
                await layer.draw(this.ctx)
            }
        }
        let buf = this.canvas.toBuffer()
        if (!!this.options.outPath) {
            fs.writeFileSync(this.options.outPath, buf)
        } else {
            return buf
        }
    }

    /**
   * 注册字体
   */
    private _registerFont() {
        const FONT = path.resolve(__dirname, './font/')
        // Register more font
        registerFont(path.join(FONT, 'msyh.ttf'), { family: 'MicrosoftYaHei' });
        registerFont(path.join(FONT, 'msyhbd.ttf'), { family: 'MicrosoftYaHei-Bold' });
        registerFont(path.join(FONT, '方正粗圆简体.ttf'), { family: 'FZY4JW--GBK1-0' });
        // [已经不可以了] 同一个字体可以以不同名称注册多次
        registerFont(path.join(FONT, '腾讯体-W7.otf'), { family: 'TTTGBMedium' });
        // registerFont(path.join(FONT, '腾讯体-W7.otf'), { family: 'TencentSansW7' });
        // registerFont(path.join(FONT, '方正正黑简体.ttf'), { family: 'FZZHJW' });
        registerFont(path.join(FONT, '方正正黑简体.ttf'), { family: 'FZZHJW--GB1-0' });
        // registerFont(path.join(FONT, '方正正纤黑简体.ttf'), { family: 'FZZXHJW' });
        registerFont(path.join(FONT, '方正正纤黑简体.ttf'), { family: 'FZZXHJW--GB1-0' });
        // registerFont(path.join(FONT, '方正正中黑简体.ttf'), { family: 'FZZZHONGJW' });
        registerFont(path.join(FONT, '方正正中黑简体.ttf'), { family: 'FZZZHONGJW--GB1-0' });
        registerFont(path.join(FONT, '方正兰亭黑简体.ttf'), { family: 'FZLTHK--GBK1-0' });
        registerFont(path.join(FONT, '方正兰亭中黑简体.ttf'), { family: 'FZLTZHK--GBK1-0' });
        registerFont(path.join(FONT, '方正兰亭大黑简体.ttf'), { family: 'FZDHTJW--GB1-0' });
        registerFont(path.join(FONT, '方正尚酷简体.ttf'), { family: 'FZSKJW--GB1-0' });
        registerFont(path.join(FONT, '方正粗宋简体.ttf'), { family: 'FZCSJW--GBK1-0' });
        registerFont(path.join(FONT, '方正粗圆简体.ttf'), { family: 'FZY4JW--GBK1-0' });
        registerFont(path.join(FONT, '方正舒体简体.ttf'), { family: 'FZSTK--GBK1-0' });
        registerFont(path.join(FONT, '方正汉真广标简体.ttf'), { family: 'FZHZGBJW--GBK1-0' });
        registerFont(path.join(FONT, '汉仪菱心体简.ttf'), { family: 'HYk2gj' });
        registerFont(path.join(FONT, '汉仪综艺体简.ttf'), { family: 'HYk1gj' });
        registerFont(path.join(FONT, '汉仪大宋简.ttf'), { family: 'HYa4gj' });
        registerFont(path.join(FONT, 'SourceHanSansCN-ExtraLight.otf'), { family: 'SourceHanSansCN-ExtraLight' });
        registerFont(path.join(FONT, 'SourceHanSansCN-Light.otf'), { family: 'SourceHanSansCN-Light' });
        registerFont(path.join(FONT, 'SourceHanSansCN-Normal.otf'), { family: 'SourceHanSansCN-Normal' });
        registerFont(path.join(FONT, 'SourceHanSansCN-Regular.otf'), { family: 'SourceHanSansCN-Regular' });
        registerFont(path.join(FONT, 'SourceHanSansCN-Medium.otf'), { family: 'SourceHanSansCN-Medium' });
        registerFont(path.join(FONT, 'SourceHanSansCN-Bold.otf'), { family: 'SourceHanSansCN-Bold' });
        registerFont(path.join(FONT, 'SourceHanSansCN-Heavy.otf'), { family: 'SourceHanSansCN-Heavy' });
        registerFont(path.join(FONT, 'PingFang-SC-Regular.ttf'), { family: 'PingFang-SC-Regular' });
    }
}