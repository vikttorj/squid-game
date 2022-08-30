import { useState } from 'react';
import './App.css';

import Home from './Components/Home/Home';
import Game from './Components/Game/Game';

import { subscribe } from './utils/events';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

export default function App() {

	const [name, setName] = useState('');
	subscribe('createUserEvent', (e) => setName(e.detail));

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/game" element={<Game props={name} />}></Route>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</Router>
		</div>
	);
}