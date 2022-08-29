import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home', () => {
  render(Home);
  const linkElement = screen.findByText(/join/i);
  expect(linkElement).toBeInTheDocument();
});
