import "./App.css";
import Boton from "./componentes/Boton"; // importamos el componente Boton
import Contador from "./componentes/Contador";
import freeCodeCampLogo from "./imagenes/logo.png";
import { useState } from "react";// importamos useState de react esto nos permitira manejar el estado de los componentes es un hook

function App() {

  // Creamos un estado para el numero de clicks
  // 2 elementos del arreglo , el valor actual del estado y la funcion que nos permitira actualizar el estado
  // le asignamos el valro retornado por useState que es un arreglo con dos elementos
  // inicializamos el estado en 0 con useState(0)
  const [numeroDeClicks, setNumeroDeClicks]= useState(0);

  // Funciones que se ejecutaran al hacer click en los botones

  // Funcion que se ejecutara al hacer click en el boton de click
  const manejarClick = () => {
    console.log("se hizo click");
    // Actualizamos el estado de numeroDeClicks llama a la funcion setNumeroDeClicks y le pasamos el valor actual del estado + 1
    setNumeroDeClicks(numeroDeClicks + 1);
  };

  // Funcion que se ejecutara al hacer click en el boton de reiniciar
  const reiniciarContador = () => {
    setNumeroDeClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="frecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freeCodeCamp"
        />
      </div>
      {/* contenedor principal */}
      <div className="contenedor-principal">
        {/* Agregamos el componente de contador para los clicks*/}
        <Contador numeroDeClicks={numeroDeClicks} />
        {/* Agregamos los componentes */}
        <Boton texto="Click" esBotonDeClick={true} manejarClick={manejarClick}/>
        <Boton texto="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador}/>
          
      </div>
    </div>
  );
}

export default App;
