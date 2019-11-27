import Layer from "../base/layer";
import { LayerInterface, ImageLayerInterface } from "../../types";

export default class ImageLayer extends Layer implements ImageLayerInterface{
  
  imageData: Array<number>

  constructor(layerNode) {
    super(layerNode)
    this.imageData = layerNode.parseImageData()
  }

  toLayer() {
    return this as ImageLayerInterface
  }
}