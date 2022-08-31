import { React, useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

let component;

beforeEach(() => {
	component = render(<NavBar />);
})

test('renders NavBar', () => {
	component.getAllByText('Hi');
});
