import React from "react";
import "./App.scss";
import Nav from './components/nav';
import Hero from './components/hero';
import Work from './components/work';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Work />
      <Footer />
    </div>
  )
}

export default App;
