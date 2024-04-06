import { Grid, Heading } from '@radix-ui/themes'
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
        <>
            <Heading as="h2" size="4" mb={'3'} align={'center'}>Results</Heading>
            <Grid 
                className="preview-image-list-container" 
                columns={{ initial: '1', sm: '3' }} 
                gridRow={'1fr'}
                gap="3" 
                width="auto">
                {images && images.map(image => (
                    <PreviewImage 
                        key={image.id} 
                        testid={image.id}
                        imageUrl={image.url} 
                        altText={image.altText} 
                        text={text} 
                        position={position} />
                ))}
            </Grid>
        </>
    )
}