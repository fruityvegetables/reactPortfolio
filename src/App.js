import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import ProjectHolder from './components/ProjectHolder/ProjectHolder.js';

function App() {
  return (
    <div className="App">
      <h1>Garrett Troyer's React Portfolio!</h1>
      <h2>Sorry for the layout at the moment.</h2>
      <h3>The buttons are links to README's. If there is a deployed version, click the indicated link!</h3>
      <Header />
      <ProjectHolder />
      <canvas id="canvas"></canvas>
      <canvas id="myCanvas"></canvas>
      <Footer />
      
    </div>
  );
}

export default App;
