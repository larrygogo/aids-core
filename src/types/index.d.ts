export interface TemplateInterface {
    name: string
    src: string
    md5: string
    width: number
    height: number
    layers: Array<any>
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

    base64? : string
}