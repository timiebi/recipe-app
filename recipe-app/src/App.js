import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import { HomeView } from './views/HomeView';
import { MobileFormView } from './views/MoblieFormView';
import { RecipeView } from './views/RecipeView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeView/>}/>
        <Route path='home' element={<MobileFormView/>} />
        <Route path='recipe' element={<RecipeView/>}/>
      </Routes>
    </div>
  );
}

export default App;
