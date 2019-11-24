import { Canvas, createCanvas, registerFont, loadImage } from 'canvas';
import { TemplateInterface, RenderOptions, FontOption } from '../types';
import ImageLayer from './layer/image';
import TextLayer from './layer/text';
import path from 'path';
import fs from 'fs';



export default class Render {
    public template: TemplateInterface
    public options: RenderOptions
    public canvas: Canvas
    public ctx: any

    constructor(template: TemplateInterface, options: RenderOptions) {
        if(options.font) {
            this._registerFont(options.font.dir, options.font.list)
        }
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
                
            } else if(item.type === 'text'){
                let layer = new TextLayer(item)
                if(item.layer === 'text_action' && this.options.actionText) {
                    layer.changeValue(this.options.actionText)
                } else if(item.layer === 'text_main' && this.options.actionText) {
                    layer.changeValue(this.options.mainText)
                } else if(item.layer === 'text_sub' && this.options.actionText) {
                    layer.changeValue(this.options.subText)
                }
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
    private _registerFont(dir: string, fontList: Array<FontOption>) {
        // Register more font
        fontList.forEach(item => {
            registerFont(path.join(dir, item.path), { family: item.family });
        });    
    }
}