import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie'

import Welcome from './components/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Content = () => {
  const [cookies, setCookie] = useCookies(['visited'])

  return (
    <CookiesProvider >
      {
        cookies.visited ? (
          <App />
        ) : (
          <Welcome setCookie={setCookie}/>
        )
      }
      <script src="https://kit.fontawesome.com/a4ec5f52e4.js" crossOrigin="anonymous"></script>
    </CookiesProvider >
  )
}

root.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);
