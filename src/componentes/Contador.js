import React from "react";
import "../hojas-de-estilo/Contador.css"; // importamos el archivo css de los botonesq

// Creamos una funcion Contador
// recibimos el numero de clicks como parametro props
function Contador({ numeroDeClicks }){
    return(
        /*Agregamos un h2 que va a mostrar el numero de clicks que se han hecho, este numero lo recibimos como parametro de la funcion Contador*/
        <div className="contador">
            <h2>{ numeroDeClicks }</h2>
        </div>
    );
};

export default Contador;