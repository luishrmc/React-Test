import React, {useState} from "react"
import Sub from "./Sub"

export default props =>{

    /* Usando desestruturação de assinatura para criar um array que contém
    uma variável e uma função que setta o valor dessa variável */

    const [num, setNum] = useState(0);

    function Clicar(valorGeradoRandom){
        console.log("Ação!!!")
        console.log(valorGeradoRandom)

        setNum(valorGeradoRandom); // Alterando o valor da variável num
    }

    return (

        <div> 
            <h4>Valor: {num}</h4> {/* Apresentando a variável no header */}
            <Sub propFunction = {Clicar}></Sub>
        </div>


    );

};


