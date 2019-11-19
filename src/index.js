import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TopnavComponent from './TopnavComponent';
import ExploreComponent from './ExploreComponent';
import TextomeioComponent from './TextomeioComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

ReactDOM.render(<TopnavComponent />, document.getElementById('Topnav'));
ReactDOM.render(<ExploreComponent />, document.getElementById('Explore'));
ReactDOM.render(<TextomeioComponent />, document.getElementById('Texto'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
