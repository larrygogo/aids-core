export interface TemplateInterface {
    name: string
    src: string
    md5: string
    width: number
    height: number
    layers: Array<LayerInterface>
}


export interface LayerInterface {
    x: number
    y: number
    name: string
    type: string
    layer: string
    width: number
    height: number
    zIndex: number
    category: string
}

export interface LayerInfoInterface {
    name: string
    zIndex: number
    type: string
    category: string
}

export interface ImageLayerInterface extends LayerInterface{
    imageData: Array<number>
}

export interface TextLayerInterface extends LayerInterface{
    text: TextInfo
}

export interface RenderOptions {
    subText?: string
    mainText?: string
    actionText?: string

    outPath?: string
    bodyImage?: string

    font?: {
        dir: string
        list: Array<FontOption>
    }
}

interface FontOption {
    path: string
    family: string
}

export interface WordSnippet {
    fontWeight: string
    fontStyle: string
    fontFamily: string
    fontSize: string
    opacity: number
    color: string
    letterSpacing: string
    marginLeft: number
    lineHeight: string
    textDecoration: string
    text: string
}

export interface TextInfo {
    fontWeight: string
    fontStyle: string
    fontFamily: string
    fontSize: string
    opacity: number
    color: string
    letterSpacing: string
    marginLeft: number
    lineHeight: string
    textDecoration: string
    value: string
}

