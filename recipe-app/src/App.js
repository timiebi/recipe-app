import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import { HomeView } from './views/HomeView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeView/>}/>
      </Routes>
    </div>
  );
}

export default App;
