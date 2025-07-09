import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the header with the correct title', () => {
    render(<Header />);
    const titleText = screen.getByText(/Unstyle/i);
    expect(titleText).toBeInTheDocument();
  });

  it('renders the correct fontawesome icon', () => {
    render(<Header />);
    const iconClass = screen.getByTestId('unstyle-icon')
    expect(iconClass).toBeInTheDocument();
  })
});
