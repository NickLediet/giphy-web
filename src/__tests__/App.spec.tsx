import { describe, expect, it, vi} from 'vitest'
import { render, screen } from '@testing-library/react'
import { Theme } from '@radix-ui/themes'
import App from '../App';

window.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}))

describe('App', () => {
  it('should render the correct text', () => {
    render(<Theme>
        <App />
    </Theme>);
    expect(screen.getByText('count is 0')).not.toBeNull();
  });
});