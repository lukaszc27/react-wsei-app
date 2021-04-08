import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Reset} from 'styled-reset';
import {createGlobalStyle} from 'styled-components'


/**
 * styl globalny
 */
const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, 
                  BlinkMacSystemFont, 
                  'Segoe UI', 
                  Roboto, 
                  Oxygen, 
                  Ubuntu, 
                  Cantarell, 
                  'Open Sans', 
                  'Helvetica Neue', 
                  sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Reset/>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
