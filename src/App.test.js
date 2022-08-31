import { React, useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import App from './App';

let component;

beforeEach(() => {
	component = render(<App />);
})

test('renders App to Home', () => {
	component.getAllByText('New player');
});

import { publish } from './utils/events';
import { nameEvents } from './utils/const'

test('renders App and subscribe to event', () => {
	act(() => {
		publish(nameEvents?.createUser, { 'name': 'User' });
	});	
});
