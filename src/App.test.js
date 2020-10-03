import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders footer with copyright', () => {
  const { getByText } = render(<App />);
  const footerElement = getByText(/copyright/i);
  expect(footerElement).toBeInTheDocument();
});
