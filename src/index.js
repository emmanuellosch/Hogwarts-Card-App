import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
