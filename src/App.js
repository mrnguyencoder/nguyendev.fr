import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './componants/Hero';
import Clients from './componants/Clients';
import Contact from './componants/Contact';
import NavBar from './componants/NavBar';
import Footer from './componants/Footer';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
    <Footer />
    
    </>
  );
}

export default App;
