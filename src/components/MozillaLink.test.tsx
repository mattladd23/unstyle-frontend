import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MozillaLink from './MozillaLink';

describe('MozillaLink', () => {
  const testUrl: string = 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-color';  

  it('renders a link with correct href and target', () => {
    render(<MozillaLink url={testUrl} />);
    const link = screen.getByTestId('mozilla-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', testUrl);
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('displays the correct link text', () => {
    render(<MozillaLink url={testUrl} />);
    expect(screen.getByText(/MDN Web Docs/i)).toBeInTheDocument();
  });

  it('includes the FontAwesome icon', () => {
    render(<MozillaLink url={testUrl} />);
    expect(screen.getByTestId('mozilla-link-icon')).toBeInTheDocument();
  });
});
