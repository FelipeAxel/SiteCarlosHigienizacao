import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import './view/LandPage.css'

import LandPage from './view/LandPage';
import './view/navBar.css';
import NavBar from './view/NavBar';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
        <LandPage/>
      </div>
    </div>
  );
}

export default App;
