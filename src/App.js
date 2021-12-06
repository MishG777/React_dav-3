import React from 'react';
import Navbar from './components/Navbar';
import FirstMainSection from './components/firstMainSection';
import SecondMainSection from './components/secondMainSection'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Navbar/>
      <FirstMainSection />
      <SecondMainSection />
      <Footer />
    </div>
  );
}

export default App;
