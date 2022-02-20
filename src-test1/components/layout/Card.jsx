import React from "react";
import "./Card.css"

export default props =>
    
    /**
     * Container principal do componente
     * 
     * Usa-se duas chaves para passar como parâmetro um obj
     */

    <div className="Card" style={{
        borderColor: props.color || '#fff'
    }}>

        {/* Apresenta a propriedade título */}

        <div className="Footer" style={{backgroundColor: props.color || "#000" }}> {/* Usa-se duas chaves para passar como parâmetro um obj */}
            {props.titulo}
        </div>

        {/* Todo conteúdo presente no container
         é apresentado */}

        <div className="Conteudo">
            {props.children}

        </div>
        

    </div>
    