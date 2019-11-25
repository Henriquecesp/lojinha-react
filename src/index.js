import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './Context';
import App from './App';
// AOS Lib
import AOS from 'aos';
import 'aos/dist/aos.css';
// Importando a nossa Lib de rotas
import { BrowserRouter } from 'react-router-dom'
//AOS Start
AOS.init()

ReactDOM.render((
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider> 
), document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
