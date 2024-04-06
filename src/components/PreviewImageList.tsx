import { Image, TextPosition } from '../lib'
import { PreviewImage } from './PreviewImage'

type PreviewImageProps = {
    images: Image[],
    text: string,
    position: TextPosition,
}

export function PreviewImageList(props: PreviewImageProps) {
    const { images, text, position } = props
    return (
        <div className={`preview-image-list-container`}>
            {images && images.map(image => (
                <PreviewImage 
                    key={image.id} 
                    testid={image.id}
                    imageUrl={image.url} 
                    altText={image.altText} 
                    text={text} 
                    position={position} />
            ))}
        </div>
    )
}