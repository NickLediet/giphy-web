import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PreviewImageList } from '../PreviewImageList'
import { TextPosition } from '../../lib'

describe('PreviewImageList', () => {
    it('renders a list of images', () => {
        const images = [
            { id: '1', url: 'https://example.com/image1.jpg', altText: 'Test Image 1' },
            { id: '2', url: 'https://example.com/image2.jpg', altText: 'Test Image 2' },
            { id: '3', url: 'https://example.com/image3.jpg', altText: 'Test Image 3' },
        ]
        const text = 'Test Text'
        const { unmount } = render(<PreviewImageList images={images} text={text} position={TextPosition.Below} />)
        images.forEach(image => {
            const previewImage = screen.getByTestId(image.id) as HTMLImageElement
            expect(previewImage.src).toBe(image.url)
            expect(previewImage.alt).toBe(image.altText)
        })
        unmount()
    })

    it('renders an empty list', () => {
        const images = []
        const text = 'Test Text'
        const { unmount } = render(<PreviewImageList images={images} text={text} position={TextPosition.Below} />)
        expect(screen.queryByTestId('image')).toBeNull()
        unmount()
    })
})