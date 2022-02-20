import React from "react";

/**
 * Componente baseado em função
 */

export default (props) => {

    /**
     * Não vai receber um valor direot de states,
     * mas como uma propriedade do container
     */

    return (
        <h4>Valor: {props.valor}</h4>
    );
};