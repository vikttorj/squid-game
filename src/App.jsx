import { useState } from 'react';
import './App.css';

import Home from './Components/Home/Home';
import Game from './Components/Game/Game';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';




function App() {

  let [name, setName] = useState('');
  console.log('oakdf: ' + name)
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/game" element={<Game name={name}/>}></Route>
          <Route path="/" element={<Home name={name} />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
