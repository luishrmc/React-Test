import React, { Component } from "react";
import "./Contador.css"
import Display from "./Display";
import Passo from "./Passo";
import Botoes from "./Botoes";

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
     * Funções para alterar os valores diretamente não podem ser aplicadas
    */

    /**
     * Operação de incremento
     */

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })

    }

    /**
     * Operação de decremento
     */

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })

    }

    setPasso = (novoPasso) => {
        this.setPasso({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                
                <h2>Contador</h2>

                <Passo passo={this.state.passo} onPassoChange={this.setPasso}></Passo>

                <Display valor={this.state.valor} ></Display>

                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
                
            </div>
        )
    }
}

