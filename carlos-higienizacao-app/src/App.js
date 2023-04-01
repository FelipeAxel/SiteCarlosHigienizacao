import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import './view/LandPage.css'
import  './view/carrossel.css'

import LandPage from './view/LandPage';
import './view/navBar.css';
import NavBar from './view/NavBar';
import Contato from './view/Contato';
import Carrossel from './view/Carrossel';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
        <LandPage/>
        <Carrossel/>
        <Contato/>
      </div>
    </div>
  );
}

export default App;
