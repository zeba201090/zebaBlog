import './App.css';
import './section1'
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState } from "react";
import Nav from './navbar';
import Section1 from './section1';




function App() {
  

  return (
    <div className="App">
      <Nav/>
      <Section1/>
    </div>
  );
}
export default App;
