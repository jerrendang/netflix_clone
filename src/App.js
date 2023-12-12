import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';

import { useRef, useEffect } from 'react';

function App() {
  // --layoutWrapper
  // navbar
  // 
  // --layoutWrapper

  return (
      <div className="layoutWrapper w-screen h-screen flex flex-col bg-grey font-['Netflix-sans']">
        <Navbar />  
        <Content />
        <Footer />
      </div>  
  )
}

export default App;
