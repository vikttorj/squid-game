import { React, useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

let component;

beforeEach(() => {
	component = render(
		<Router>
		  <NavBar />
		</Router>
	  );
})

test('renders NavBar', () => {
	component.getAllByText('Hi,');
});
