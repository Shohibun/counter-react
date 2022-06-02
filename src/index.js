import React from 'react';
import {createRoot} from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

//New method to put the element to the DOM
const root = createRoot(
  document.getElementById('root')
)
//This will call the element that will put to the DOM
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();