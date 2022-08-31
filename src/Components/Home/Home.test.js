import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import Home from './Home';

let component;

beforeEach(() => {
  component = render(<Home />);
});

test('renders Home', () => {
  component.getAllByText('New player');
});

test('click name button, input Name empty', () => {
  const button = component.getByText('Join');
  fireEvent.click(button);

  const el = component.getByText('Name necessary');
  expect(el).toBeVisible;
});

test('click name button, input Name filled', () => {
  const button = component.getByText('Join');
  const input = component.getByText('Name');
  fireEvent.click(button);

  const el = component.getByText('Name necessary');
});
