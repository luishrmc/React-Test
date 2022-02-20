import React from "react";

export default props =>{

    /* Uma outra forma de faz sem utilizar função anônima
    
        function acao(){
            props.propFunction(Math.random());
        }

        e na div principal: <button onClick={acao}> Alterar </button>
    
    */

    return(
        <div>   {/* A propriedade onClick é própria do ReactDOM e necessária para interação do click do usuário */}


        <button onClick={() => {      /* O valor da propriedade é dado pela função anônima */

            props.propFunction(Math.random())

        }}>Alterar</button>
        
    </div>

    )

}

