/**
 * Index.js é a porta de entrada da aplicação
*/

/**
 * Fundamental para usar um código .jsx (HTML dentro de JavaScript)
 * 
 * Ele é quem converte o código HTML para uma chamada JS
 */

import React from "react";

import ReactDOM from "react-dom";

/**
 * Todas as mudanças estéticas realizadas nesse arquivo css
 * são aplicadas à página
 */
import "./index.css";

/**
 * Todos os componentes juntos em um único componente
 */
import App from "./App.jsx";

/**
 * render (elemento, local me que ele será renderizado)
 * 
 * nesse exemplo, usa-se o obj document com sua função para getElementById
 * para buscar o conteiner que comtém esse o id informado e aplicar nele
 * as modificações
 */
ReactDOM.render(

    <App></App>,
    document.getElementById("root")
)



