import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Game from './Game';

let component;

beforeEach(() => {
  component = render(
    <Router>
      <Game />
    </Router>
  );
});

test('renders Game', () => {
    component.getAllByText('Score');
});
