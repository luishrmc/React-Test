import React from "react";

export default (props) =>

    /**
     * Com o uso de chaves o valor é interpolado,
     * de modo a ser identificado como código JS.
     * 
     * Um "Compilador" para JS
     * 
     * Logo <p>{1 + 2}</p> resulta em 3 na nossa aplicação
     */
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
    
    </>


