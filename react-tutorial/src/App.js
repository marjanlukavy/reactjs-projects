import React, { useState } from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
