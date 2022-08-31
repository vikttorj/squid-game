import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import Game from './Game';

let component;

beforeEach(() => {
  component = render(<Game />);
});

test('renders Game', () => {
    component.getAllByText('Score');
});
