import {Canvas, Image, registerFont, NodeCanvasRenderingContext2DSettings} from 'canvas';
import { TemplateInterface } from '../types';



export default class Render {
    public canvas: Canvas
    public ctx: any

    constructor(template: TemplateInterface) {
        this.canvas = new Canvas(template.width, template.height);
        this.ctx = this.canvas.getContext('2d');
    }
}