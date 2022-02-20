import React, {useState} from "react";

export default props => {

    const [num, setNum] = useState(1);
    return (

        <div>

            <div className="Input">

                <label for="numInput">O número é: </label>
                <input
                    id="numInput"
                    type="number"
                    value={num}
                    style={{fontSize: "1.4rem", textAlign: "center"}}



                    onChange={(e) => setNum(e.target.value)}
                />

            </div>

            <div className="Oper">

                {/* Renderização condicional */}
                {num % 2 == 0 ? <span>Par</span> : <span>Ímpar</span>}

            </div>

        </div>

    )
}

