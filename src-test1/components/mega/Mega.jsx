import React,  {useState} from "react";

export default (props) => {

    const [num, setNum] = useState(Array(props.qtdNum).fill(0))

    function geradorNumNaoContidos(array) {
        const min = 1
        const max = 60
        const newNum = parseInt(Math.random() * (max - min)) + min

        return array.includes(newNum) ? geradorNumNaoContidos(array) : newNum
    }
    

    function gerarNum() {
        const newArray = Array(props.qtdNum)
            /**
             * Setta inicialmente todos os elementos do array
             * como sendo zero.
             */
            .fill(0)
            /**
             * Nesse reduce, não é preciso instaciar uma variável para o elemento
             * como cada valor é nulo até ser adicionado.
             * 
             * Devido a sintaxe, o reduce um único elemento que é um array
             * com os número aleatórios gerados pela função.
             * 
             * É um pouco contra intuitívo por causa do operador de
             * desestruturação ...
             */
            .reduce(acc => [...acc, geradorNumNaoContidos(acc)], [])
            /**
             * Sort para ordenar de maneira crescente
             */
            .sort((a, b) => a - b)
        
        setNum(newArray)

        
    }

    return (

        <div>
            <div className="footer">
                <h3>Mega</h3>
                <h4>{num.join(" ")}</h4>
            </div>

            <div>
                <button onClick={gerarNum}>Gerador de Números</button>
            </div>
            
        </div>
        

    );
};