import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />, container);
  expect(container.textContent).toBe("Create new player");
});
