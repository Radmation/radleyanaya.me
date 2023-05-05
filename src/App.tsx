import React from "react";
import "./App.scss";
import Nav from './components/nav';
import Hero from './components/hero';
import Work from './components/work';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Work />
    </div>
  )
}

export default App;
