import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Theme } from '@radix-ui/themes'
import { TextPosition } from '../../lib'
import { QuerySection } from '../QuerySection'

window.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}))
describe('QuerySection', () => {    
    it('matches snapshot', () => {
        const { container, unmount } = render(<Theme>
            <QuerySection onQueryChange={() => {}} />
        </Theme>)
        expect(container).toMatchSnapshot()
        unmount()
    })

    it('calls onQueryChange when query changes', () => {
        const onQueryChange = vi.fn((query: string, position: TextPosition, text: string) => {
            console.log(query, position, text)
        })
        const {unmount, container} = render(<Theme>
            <QuerySection onQueryChange={onQueryChange} />
        </Theme>)
        // Update query input
        const queryInput = screen.getByTestId('query') as HTMLInputElement
        const query = 'test query'
        fireEvent.input(queryInput, { target: { value: query } })
        // Update Position select
        const positionSelect = container.querySelector('select') as HTMLSelectElement
        const position = TextPosition.CenterTop
        fireEvent.change(positionSelect, { target: { value: position } })
        // Update text input
        const textInput = screen.getByTestId('text') as HTMLInputElement
        const text = 'test text'
        fireEvent.input(textInput, { target: { value: text } })
        // Submit form
        fireEvent.submit(
            container.querySelector('form') as HTMLFormElement,
        )

        expect(onQueryChange).toHaveBeenCalledWith(query, position, text)
        unmount()
    })
})