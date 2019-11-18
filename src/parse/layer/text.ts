import Layer from "../base/layer";

export default class TextLayer extends Layer {
    public value: string
    public letterSpacing: number
    public color: Array<number>
    public fontFamily: string
    public fontSize: number

    constructor(layerNode) {
        super(layerNode)
        let textNode = layerNode.export()
        this.value = textNode.text.value
        this.letterSpacing = this._getBytesCount(textNode.text.value)
        this.color = textNode.text.font.colors[0] || [0, 0, 0, 255]
        this.fontFamily = textNode.text.font.name
        this.fontSize = this._getFontSize(textNode)
        Object.assign(this.layerTemplate, {
            value: this.value,
            letterSpacing: this.letterSpacing,
            color: this.color,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize
        })
        
    }

    // 获取字符串的字节数
    private _getBytesCount(str: string): number {
        let bytesCount = 0;
        for (let i = 0; i < str.length; i++) {
            let c = str.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(c)) { //匹配单字节
                bytesCount += 1;
            }
            else {
                bytesCount += 2;
            }
        }
        return bytesCount / 2
    }

    private _getFontSize(textNode): number {
        let transY = textNode.text.transform.yy,
            sizes = textNode.text.font.sizes
        return Math.round(sizes[0] * transY * 100) * 0.01;
    }
}