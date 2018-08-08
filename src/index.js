import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
// import WebFont from 'webfontloader';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import 'normalize.css';
import '../src/styles/css/index.css'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
