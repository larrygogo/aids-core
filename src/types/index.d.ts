export interface TemplateInterface {
    name: string
    src: string
    md5: string
    width: number
    height: number
    layers: Array<LayerNodeInterface>
}


export interface LayerNodeInterface {
    x: number
    y: number
    name: string
    type: string
    layer: string
    width: number
    height: number
    zIndex: number
    category: string

    base64?: string

    letterSpacing?: number
    color?: Array<number>
    fontFamily?: string
    fontSize?: number
    value?: string
}

export interface RenderOptions {
    subText: string
    mainText: string
    descText: string

    outPath?: string
    bodyImage?: string
}