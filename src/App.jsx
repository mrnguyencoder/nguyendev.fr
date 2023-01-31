import React from 'react';
import Prestations from './components/Prestations';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Prestations/>
      <FAQs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App