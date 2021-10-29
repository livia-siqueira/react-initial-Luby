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
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/forms/Input';
import Contador from './components/comunicacao/contador/Contador';
import Megasena from './components/mega-sena/Megasena';

export default props => (
    <div className="App">
        <h1>Fundamentos React JS</h1>
        <div className="cards">

            <Card titulo="01-Aprendendo a criar um componente" color='#FA6900'>
                <MyComponent />
            </Card>
            <Card titulo="02 - Componentes com parâmetros" color="#E94C6F">
                <WithParametro titulo="Este é um titulo" subtitulo="Este é um subtitulo" />
            </Card>
            <Card titulo="03- Componentes com filhos" color="#008BBA">
                <WithChildren>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Augusto</li>
                    <li>Livia</li>
                </WithChildren>
            </Card>
            <Card titulo="04- Repetição" color="#D96459">
                <Renderizacao />
            </Card>
            <Card titulo="05- Condicional v1" color="#FF856B">
                <Condicional numero={15}></Condicional>
            </Card>
            <Card titulo="06- Condicional v2" color="#92B06A">
                <CondicionalIf numero={15}></CondicionalIf>
            </Card>
            <Card titulo="07- Comunicação direta" color="#6a6fb0">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="08- Comunicação Indireta" color="#DBDB70">
                <Super></Super>
            </Card>
            <Card titulo="09- Input" color="#8E2323">
                <Input />
            </Card>
            <Card titulo="10- State, Button e Classes" color="#871F78">
                <Contador passo={20} valor={100}/>
            </Card>
            <Card titulo="11- Jogo da Mega-sena" color="#2F4F2F">
                <Megasena qtdNumber={25}/>
            </Card>
        </div>
    </div>
);