import React, { Component } from 'react';
import Counter from './Conuter';

class Counters extends Component {


    render(){ 
        /* Filtrando qual propriedade é dedejável */ //DENTRO DO RENER
        const {counters, onReset, onIncrement, onDelete } = this.props;

        return(
            <div>

                <button 
                    onClick={onReset}
                    className='btn btn-primary btn-sm m-2'>

                    Reset
                    </button>

                {/* Cada Counter vai possuir seu próprio estado */}
                
               {counters.map(
                   counter => <Counter 
                                key={counter.id}
                                counter={counter}
                                onDelete={onDelete}
                                onIncrement={onIncrement}
                                />)}

            </div>
        )
    }
}

export default Counters;