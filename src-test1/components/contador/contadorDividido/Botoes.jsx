import React from "react";

/**
 * Componente baseado em função
 * 
 * Recebe em sua propriedade as funções para decremento e incremento
 */

export default (props) => {

    return (

        <div>

            {/* O onClick  vai passar o evento para os métodos internamento
            já que eles não têm parâmetros.*/}

            {/* No caso de algum parâmetro: onClick={(e) => props.onInc(e) } */}

            <button onClick={props.onInc}>+</button>
            <button onClick={props.onDec}>-</button>
         </div>

    );
};