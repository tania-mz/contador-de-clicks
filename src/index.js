//modulos necesarios para la creacion y renderizado de la aplicacion

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';// importamos el archivo css
import App from './App'; // importamos el componente App


//ReactDOM.createRoot() es un método introducido en React 17 para crear un "root" para renderizar tus componentes. Toma un elemento del DOM como argumento, generalmente identificado por su id ('root' en este caso).
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(// 
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);