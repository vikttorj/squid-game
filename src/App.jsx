import { useState } from 'react';
import './App.css';

import Home from './Components/Home/Home';
import Game from './Components/Game/Game';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

export default function App() {

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/game" element={<Game name={name} />}></Route>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</Router>
		</div>
	);
}