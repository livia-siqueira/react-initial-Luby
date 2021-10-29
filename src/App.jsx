import React from 'react'; //biblioteca1 -> html + js
import ReactDOM from 'react-dom'; //biblioteca2
import './index.css';
import './App.css';
import MyComponent from './components/basicos/First.jsx';
import WithParametro from './components/basicos/WithParam.jsx';
import WithChildren from './components/basicos/WithChildren.jsx';
import Card from './components/layout/Card';
import Renderizacao from './components/basicos/Renderizacao';
import Condicional from './components/basicos/Condicional';
import CondicionalIf from './components/basicos/CondicionalIf';

export default props => (
    <div className="App">
        <Card titulo="01-Aprendendo a criar um componente">
            <MyComponent/>
        </Card>
        <Card titulo="02 - Componentes com parâmetros">
            <WithParametro titulo="Este é um titulo" subtitulo="Este é um subtitulo"/>
        </Card>
        <Card titulo="03- Componentes com filhos">
            <WithChildren>
                <li>Ana</li>
                <li>Bia</li>
                <li>Augusto</li>
                <li>Livia</li>
            </WithChildren>
        </Card>
        <Card titulo="04- Repetição">
            <Renderizacao/>
        </Card>
        <Card titulo="05- Condicional v1">
            <Condicional numero={15}></Condicional>
        </Card>
        <Card titulo="06- Condicional v2">
            <CondicionalIf numero={15}></CondicionalIf>
        </Card>
    </div>
);