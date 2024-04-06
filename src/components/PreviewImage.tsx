import { Box, Card, Flex, Text } from '@radix-ui/themes'
import { CSSProperties } from 'react'
import { TextPosition } from "../lib"

type PreviewImageProps = {
    text: string
    imageUrl: string
    position: TextPosition,
    altText: string,
    testid?: string,
}

function ImageText(props: { text: string, style?: CSSProperties }) {
    const { text, style, ...propsRest } = props
    return (
        <Text 
            align={'center'} 
            size={'4'}
            style={{ 
                width: '100%', 
                display: 'block', 
                fontFamily: 'Impact', 
                color: 'white',
                letterSpacing: '1px',
                ...style 
            }} 
            {...propsRest}>
            { text }
        </Text>
    )
}

export function PreviewImage({ text, imageUrl, position, altText, testid }: PreviewImageProps) {
    return (
        <Box>
            <Card>
                <div style={{ position: 'relative' }}>
                    {
                        position !== TextPosition.Below && 
                            <ImageText text={ text } data-testid={ position } style={{
                                position: 'absolute',
                                top: position === TextPosition.CenterTop ? '20px' : 'auto',
                                bottom: position === TextPosition.CenterBottom ? '20px' : 'auto',
                                width: '100%',
                                padding: '0.5rem',
                            }} /> 
                    }
                    <img 
                        style={{ width: '100%', objectFit: 'cover'}}
                        src={ imageUrl } 
                        alt={ altText } 
                        data-testid={testid || 'image'} />
                </div>
                { position === TextPosition.Below && <ImageText text={ text } data-testid={position} /> }
            </Card>
        </Box>
    )
}