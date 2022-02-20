import React from "react"
import Filho from "./Filho"

export default props =>
    <div>
        {/* Dois modo de usar as propriedades do Pai */}
        <Filho {...props}>1</Filho> {/* Com o operador ... é possível utilizar todas as prorpiedades do pai de uma vez*/}

        <Filho sobrenome={props.sobrenome}>2</Filho>

        <Filho sobrenome="C">3</Filho>
    </div>


