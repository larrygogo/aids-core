import Layer from "./layer"
import { TemplateInterface } from "../../types"

export default class Template implements TemplateInterface {
    public name: string
    public src: string
    public md5: string
    public width: number
    public height: number
    public layers: Array<Layer> = []

    constructor(src: string, width: number, height: number, name?: string, md5?: string) {
        this.src = src
        this.width = width
        this.height = height
        this.name = name
        this.md5 = md5
    }

    addLayer(layer) {
        this.layers.push(layer)
    }
}