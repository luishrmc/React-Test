import React, {useState} from "react";

export default (props) => {

    const [nome, setName] = useState("Luis")
    return (
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome}

                /**
                 * Sintaxe para a mudança da variável nome pela interface
                 */

                onChange={e => setName(e.target.value)} ></input>
        </>
    )
}


