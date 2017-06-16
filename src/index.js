import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
