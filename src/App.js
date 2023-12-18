import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import TitleModal from './components/TitleModal';
import { hideModal, showModal } from './store/modalReducer.js';

import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const modalState = useSelector(state => state.modalState);
  useEffect(() => {
    console.log(modalState)
  }, [modalState])
  // highLightedTitle, imageURL, tvGenres, movieGenres
  const handleInfoClick = (e) => {
    if (e.target == e.currentTarget){
      dispatch(hideModal())
    }
  }

  return (
      <div className="layoutWrapper w-screen h-screen flex flex-col bg-grey font-['Netflix-sans']">
        <div 
          className={`modalBg fixed pt-[60px] flex ${modalState.showModal ? 'opacity-[1] z-[5]' : 'opacity-[0] pointer-events-none z-[0]'} items-center justify-center bg-[rgba(0,0,0,.6)] w-[100vw] h-[100vh]`}
          onClick={e => handleInfoClick(e)}
        >
          <TitleModal 
            highLightedTitle={modalState.highLightedTitle}
            imageURL={modalState.imageURL}
            tvGenres={modalState.tvGenres}
            movieGenres={modalState.movieGenres}
          />
        </div>
        <Navbar />  
        <Content />
        {/* <Footer /> */}
      </div>  
  )
}

export default App;
