import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('Main Component', () => {
  it('renders', () => {
    render(<Main />);
    const mainElement = screen.getByTestId('main');
    expect(mainElement).toBeInTheDocument();
  });
});
