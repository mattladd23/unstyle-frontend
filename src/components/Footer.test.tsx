import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the header with the Mozilla credit start', () => {
    render(<Footer />);
    const mozillaCreditStartText = screen.getByText(/All property and initial value data sourced from /i);
    expect(mozillaCreditStartText).toBeInTheDocument();
  });

  it('renders the header with the Mozilla credit end', () => {
    render(<Footer />);
    const mozillaCreditStartText = screen.getByText(/- © Mozilla./i);
    expect(mozillaCreditStartText).toBeInTheDocument();
  });

  it('renders the Mozilla link', () => {
    render(<Footer />);
    const mozillaFooterLink = screen.getByTestId('mozilla-link')
    expect(mozillaFooterLink).toBeInTheDocument();
  });

  it('renders the GitHub links', () => {
    render(<Footer />);
    const apiLink = screen.getByTestId('github-api-link');
    const frontendLink = screen.getByTestId('github-frontend-link');
    const lambdaLink = screen.getByTestId('github-lambda-link');
    
    expect(apiLink).toBeInTheDocument();
    expect(frontendLink).toBeInTheDocument();
    expect(lambdaLink).toBeInTheDocument();
  });
});
