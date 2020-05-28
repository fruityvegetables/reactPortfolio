import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer.js';
import ProjectHolder from './components/ProjectHolder/ProjectHolder.js';

function App() {
  return (
    <div className="App">
      <h1>Garrett Troyer's React Portfolio!</h1>
      <ProjectHolder />
      <Footer />
      
    </div>
  );
}

export default App;
