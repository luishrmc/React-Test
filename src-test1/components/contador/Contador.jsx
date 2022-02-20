import React, { Component } from "react";
import "./Contador.css"

/**
 * Componente baseado em classe!!!
 * 
 * Só é possível usar o setState devido a implementação do Component
 */

export default class Contador extends Component {

    /**
     * Um estado associado ao contador. Um atributo do tipo state
     * 
     * Definindo atributos, JSON.
     * 
     * Nesse caso, os valores de estados são definidos previamente.
     * No segundo exemplo, é possível defini-los pelas propriedades
     * passadas no container do Contador
     */

    /* state = {
        passo: 1, //passo
        valor: 0  //valor inicial
    } */

    /* *
     * Sem a utilização de um construtor
     * 
     *      state = {
     *              passo: props.passo || 1,
     *              valor: props.valor || 0
     *      }
    */

    /**
     * Com a utilização de um construtor
    */

    constructor(props){
        super(props) //like python ???
        this.state = {
            passo: props.passo || 1, //Definindo um default
            valor: props.valor || 0
        }
    }

    /**
     * Funções para alterar os valores. 
     * 
     * Diretamente não podem ser aplicadas já que this é indefinido sem um construtor.
     * 
     * Logo, é possível alterar o valor por meio de uma arrow function
    */

    /**
     * Operação de incremento em uma arrow function
     */

    inc = () => {
        /**
         * Usando o setState this.setState( { variavel: this.state.variavel + mudança } )
         */
        this.setState({
            valor: this.state.valor + this.state.passo
        })

    }

    /**
     * Operação de decremento em uma arrow function
     */

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })

    }



    render() {
        return (
            <div className="Contador">
                
                <h2>Contador</h2>

                <div>
                    {/* Etiqueta para um id destinado */}
                    <label htmlFor="passoInput">Passo: </label>

                    {/**
                        * Para alterar o valor do passo pela interface.
                        * 
                        * A sintaxe continua sendo a mesma para o input,
                        * mudando apenas o tipo da variável.
                        * 
                        * O correto é definir o estilo em um arquivo
                        * css separado.
                    */}

                    <input  
                        id="passoInput" 
                        type="number" 
                        value={this.state.passo}

                        //Chamdo de um evento(e)
                        onChange={e => this.setState({passo: +e.target.value})}
                    />

                </div>

                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}

