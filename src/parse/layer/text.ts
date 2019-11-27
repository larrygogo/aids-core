import Layer from "../base/layer";
import { WordSnippet, TextLayerInterface, TextInfo } from "../../types";

export default class TextLayer extends Layer implements TextLayerInterface {
    public text: TextInfo

    constructor(layerNode) {
        super(layerNode)
        let wordSnippets = layerNode.get('wordSnippets')
        this.text = {
            fontWeight: wordSnippets[0]['font-weight'],
            fontStyle: wordSnippets[0]['font-style'],
            fontFamily: wordSnippets[0]['font-family'],
            fontSize: wordSnippets[0]['font-size'],
            opacity: wordSnippets[0]['opacity'],
            color: wordSnippets[0]['color'],
            letterSpacing: wordSnippets[0]['letter-spacing'],
            marginLeft: wordSnippets[0]['margin-left'],
            lineHeight: wordSnippets[0]['line-height'],
            textDecoration: wordSnippets[0]['text-decoration'],
            value: wordSnippets[0]['text'],
        }
        wordSnippets.forEach(item => {
            this.text.value += item.text
        });

    }

    toLayer() {
        return this as TextLayerInterface
    }
}