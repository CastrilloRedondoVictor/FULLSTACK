import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Saludo from './components/Saludo'
import Metodos from './components/Metodos'
import DobleNumero from './components/DobleNumero'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Metodos />
    <Saludo nombre='Víctor' edad='21' />
    <DobleNumero />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
