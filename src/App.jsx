import React from 'react';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default App