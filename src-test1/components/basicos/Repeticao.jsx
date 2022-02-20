import React from "react";

import produtos from "../../data/produtos"

export default props => {

    function getProductsFromId(){

        /**
         * Transformando um array em elementos de um lista HTML!!!
         */


        return produtos.map(prod => {

            /**
             * Importante usa da key para não haver nenhum erro no console
             */
            return <li key={prod.id}>
                
                {prod.id} - {prod.nome} R${prod.preco}

            </li>
        }) 
    }

    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProductsFromId()}
            </ul>
        </div>
    )
}

