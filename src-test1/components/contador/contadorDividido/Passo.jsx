import React from "react";

/**
 * Componente baseado em função.
 * 
 * Terá tanto a comunicação direta,
 * quanto o retorno de um valor alterado.
 * 
 * Duas comunicações em um componente só.
 */

export default (props) => {

    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>

            <input  
                id="passoInput" 
                type="number" 

                /**
                 * Receber o valor do passo como propriedade
                 */

                value={props.passo}

                /**
                 * Receber a função que altera o estado também como propriedade
                 * O evento.target.value é mantido pela sintaxe
                 */
                onChange={(e) => props.onPassoChange(+e.target.value)}
            />

        </div>
    );
};