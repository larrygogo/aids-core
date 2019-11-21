import { createCanvas, loadImage } from 'canvas';
export function imageToBase64(img, outputFormat?) {
    let canvas = createCanvas(img.width, img.height)
    let ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    return canvas.toDataURL(outputFormat || 'image/jpg')
}