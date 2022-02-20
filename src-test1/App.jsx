import React from "react";
import "./App.css"

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComFilhos from "./components/basicos/ComFilhos";
import ComParametros from "./components/basicos/ComParametros";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import Pai from "./components/comunicacao/direta/Pai"
import Super from "./components/comunicacao/direta/indireta/Super"
import Input from "./form/Input";
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega";


export default props => (

    <div className="App">

        <div className="Cards">

            <Card titulo="Componente Primeiro" color="#000000">

                <Primeiro>
                    
                    Nada que eu passar aqui vai ser renderizado já que
                    o componente Primeiro não apresenta a prop.children.

                    Mas o container em si vai ser totalmente renderizado
                    na aplicação!!!

                </Primeiro>

            </Card>

            <Card titulo="Componente Com Filhos (apresentando o conteúdo de um container)" color="#1b2546">

                <ComFilhos>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                    </ul>
                </ComFilhos>

            </Card>

            <Card titulo="Componente Com Parametros" color="#485695">

                <ComParametros titulo="Titulo" subtitulo="Subtitulo"></ComParametros>

            </Card>

            <Card titulo="Tratamento de dados" color="#7f8def">

                <Repeticao></Repeticao>

            </Card>

            <Card titulo="Condiciona/Uso de operações lógicas" color="#c2caff">

                <Condicional></Condicional>

            </Card>

            <Card titulo="Comunicação Direta" color="#000000">

                <Pai sobrenome="passando sobrenome por propriedade do pai"></Pai>

            </Card>

            <Card titulo="Comunicação Indireta" color="#7f8def">

                <Super></Super>

            </Card>

            <Card titulo="Input" color="#485695">

                <Input></Input>

            </Card>

            <Card titulo="Contador" color="#7f8def">

                <Contador passo = {10} valor={100}></Contador>

            </Card>

            <Card titulo="Mega" color="#c2caff">

                <Mega qtdNum = {8}></Mega>

            </Card>

            <Card titulo="Definindo uma propriedade" color="#1b2546">

                Algum conteúdo que necessida de props.children 
                para ser apresentada

            </Card>

        </div>

    </div>
);
