import { TextPosition } from "../lib"

type PreviewImageProps = {
    text: string
    imageUrl: string
    position: TextPosition,
    altText: string
}

function ImageText(props: { text: string }) {
    const { text, ...propsRest } = props
    return (
        <span className="image-text" {...propsRest}>
            { text }
        </span>
    )
}

export function PreviewImage({ text, imageUrl, position, altText }: PreviewImageProps) {
    return (
        <div>
            <div className="image-container">
                <img src={ imageUrl } alt={ altText } data-testid="image" />
                { position !== TextPosition.Below && <ImageText text={ text } data-testid={position} /> }
            </div>
            { position === TextPosition.Below && <ImageText text={ text } data-testid={position} /> }
        </div>
    )
}