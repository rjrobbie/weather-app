import { render, screen } from '@testing-library/react';
import App from './App';

test('renders weather app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/weather app/i);
  expect(linkElement).toBeInTheDocument();
});
