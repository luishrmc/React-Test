import React, { Component } from 'react';

import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

import "./App.css"

class App extends Component {

  /**
    * Configurando as propriedades dos containers Counter.
    * 
  */

  state = {
    counters: [
      {id: 1, value: 1},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}     
    ]
  }

  /**
   * Para esse função funcionar, é preciso remover as variáveis locais no supComponente,
   * 
   *                     retirando o this.state de lá, 
   * 
   * e tornando a configuração total pelo superComponente. Assim, todas as variáveis são acessadas por meio de props e não de state.
   * 
   * Comunicação Direta
   */

  handleReset = () => {
    const resetCounters = this.state.counters.map(c => {c.value = 0; return c})
    this.setState( { counters: resetCounters } );
  };

  /**
   * Essa ideia de função é muito importante para mudanças gráficas.
   * 
   * Em que uma ação causa em um SubComponente altera o comportamento do
   * SuperComponente. Comunicação Indireta
  */

  /**
   * Cria um novo array conendo todos os counters anteriores menos o que
   * foi passado por Id. Assim, o counters anterior é sobrescrito.
   * 
   * @param {int} counterId Ind do container
   */

  handleDelete = counterId => {
    const newConters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: newConters});
  };

  /**
   * Novamente uma comunicação indireta onde uma ação realizada pelo
   * subComponente exerce influência no comportamento do superComponente
   * 
   * Contexto no qual há passagem de uma função instânciada no superComponente
   */

  handleIncrement = counter =>{
    
    const newCounters = [...this.state.counters]; //Copia
    const index = newCounters.indexOf(counter);   //Index
      
    newCounters[index].value++; //Modificação

    this.setState({counters: newCounters}); //Sobrescrita
  };

  /**
   * Como render é uma função assíncrona, qunado o array counters é
   * sobrescrito, todas aplicação gráfica muda.
  */

  render(){

    return(

      <React.Fragment>

        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />

        <main className='container'>

          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete} />

        </main>

      </React.Fragment>

    );
  }
}

export default App;