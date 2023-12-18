import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie'
import { Provider } from 'react-redux';

import Welcome from './components/Welcome';
import './index.css';
import App from './App';
import configureStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore();

const Content = () => {
  const [cookies, setCookie] = useCookies(['visited'])

  return (
    <Provider store={store}> 
      <CookiesProvider >
        <App />
        <script src="https://kit.fontawesome.com/a4ec5f52e4.js" crossOrigin="anonymous"></script>
      </CookiesProvider >
    </Provider>
  )
}

root.render(
    <Content />
);
