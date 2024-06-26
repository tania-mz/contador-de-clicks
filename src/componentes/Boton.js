import React from "react"; // importamos react desde la libreria de react
import "../hojas-de-estilo/Boton.css"; // importamos el archivo css de los botones
// Creamos una funcion Boton
function Boton({texto,esBotonDeClick, manejarClick}){// paso por deseestructuracion asi ya no necesito poner props.texto
    return(
        //la clase va a estar condicionada por el tipo de boton que queremos: usamos operador ternario
        //Agregamos un event listener para que el boton haga algo cuando se haga click, en este caso, se ejecuta la funcion manejarClick
        <button className={esBotonDeClick ? "boton-click":"boton-reiniciar"} onClick={manejarClick}>
            {texto}
        </button>
    );

}

//exportamos la funcion Boton
export default Boton;