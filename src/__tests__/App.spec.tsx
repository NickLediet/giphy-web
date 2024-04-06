import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
describe('App', () => {
  it('should render the correct text', () => {
    render(<App />);
    expect(screen.getByText('count is 0')).not.toBeNull();
  });
});