import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap"

/**
 * setState faz parte de Component
 */

class Counter extends Component {

    /**
     * Construtor para o container
     * @param {Object} props propriedades passadas no container Counter
     */

    /* constructor(props){ //Agora, this não é mais indefinido e, portanto, é possível acessar as variáveis de estado!!!
        super(props);
        this.state = {
            count: props.value || 0
        }
    } */

    /**
     * É possível realizar a mesma aplicação acima sem o construtor, já que props é uma palavra reservada
     * e toda prorpiedade passada é associada a esse objeto.
     * 
     * Assim, no render utiliza-se {props.children} para passar as informações contida no container
    */

    formatCount() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    }

    /**
     * Pegar modelo de função como base!!!
     * 
     * Passar os valores das propriedades de um container
     * por meio de um função.
     * 
    */

    getBgClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    /**
     * Render possui uma chamada assíncrona!!!
     * 
     * O que significa o método pode ser chamado a qualquer momento,
     * sem a necessidade da leitura de cima-para-baixo.
     */

    render() {

        let classes = this.getBgClasses();
        
        return(

            <div>

                <span 
                    className={ classes }>
                    {this.formatCount()}

                </span>

                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className='btn btn-success btn-sm m-2'>

                    Increment
                </button>

                <button 

                    /**
                     * Usando uma função geral instânciada no SuperComponent
                     */

                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className='btn btn-danger btn-sm'>

                    Delete
                </button>

                
            </div>

        );
    } 
}
 
export default Counter;

