import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Result from './Result';

describe('Result', () => {
  const id: string = 'randomalphanumericstring123';  
  const url: string = 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight';
  const initialValue: string = 'bold';
  const propertyName: string = 'font-weight';
  const codeSnippet: string = `${propertyName}: ${initialValue};`;

  const setup = (copiedSnippet: string | null = null) => {
    const onCopy = vi.fn();
    render(
      <Result
        id={id}
        url={url}
        initialValue={initialValue}
        onCopy={onCopy}
        copiedSnippet={copiedSnippet}
      />
    );
    return { onCopy };
  };

  it('renders the property name in an h3 tag', () => {
    setup();
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent(propertyName);
  });

  it('renders the correct code snippet in a <code> block', () => {
    setup();
    const code = screen.getByText(codeSnippet);
    expect(code).toBeInTheDocument();
  });

  it('calls onCopy with correct code snippet when button is clicked', () => {
    const { onCopy } = setup();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onCopy).toHaveBeenCalledWith(codeSnippet);
  });

  it('shows the copy icon', () => {
    setup();
    const icon = screen.getByTestId('copy-icon');
    expect(icon).toBeInTheDocument();
  });

  it('shows the check icon when snippet has been copied', () => {
    setup(codeSnippet);
    const icon = screen.getByTestId('copy-success-icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders a MozillaLink with the correct URL', () => {
    setup();
    const link = screen.getByTestId('mozilla-link');
    expect(link).toHaveAttribute('href', url);
  });
});
