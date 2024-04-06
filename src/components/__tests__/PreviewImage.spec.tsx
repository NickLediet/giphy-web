import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PreviewImage } from '../PreviewImage'
import { TextPosition } from '../../lib'

describe('PreviewImage', () => {
    it('renders image with correct Url and Alt text', () => {
        const imageUrl = 'https://example.com/image.jpg'
        const altText = 'Test Image'
        const { unmount } = render(<PreviewImage imageUrl={imageUrl} altText={altText} />)
        const previewImage = screen.getByTestId('image') as HTMLImageElement
        expect(previewImage.src).toBe(imageUrl)
        expect(previewImage.alt).toBe(altText)
        unmount()
    })

    it('renders text below image container', () => {
        const text = 'Test Text'
        const {unmount} = render(<PreviewImage text={text} position={TextPosition.Below} />)
        const imageText = screen.getByTestId(TextPosition.Below) as HTMLSpanElement
        expect(imageText.textContent).toBe(text)
        unmount() 
    })

    it('renders at text the top of the image container', () => {
        const text = 'Test Text'
        const {unmount} = render(<PreviewImage text={text} position={TextPosition.CenterTop} />)
        const imageText = screen.getByTestId(TextPosition.CenterTop) as HTMLSpanElement
        expect(imageText.textContent).toBe(text)
        unmount()
    })

    it('renders at text the bottom of the image container', () => {
        const text = 'Test Text'
        const {unmount} = render(<PreviewImage text={text} position={TextPosition.CenterBottom} />)
        const imageText = screen.getByTestId(TextPosition.CenterBottom) as HTMLSpanElement
        expect(imageText.textContent).toBe(text)
        unmount()
    })
    
})