import React, {useState} from "react";
import Botoes from "./Botoes";
import './Contador.css';
import Display from "./Display";
import PassoForm from "./PassoForm";


export default class Contador extends React.Component {
    
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })

    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })

    }

    changePasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso
        })
    }
    
    render(){
        return(
            <div className="contador">
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} PassoChange={this.changePasso} />
                <Display valor={this.state.valor}/>
                <Botoes eventInc={this.inc} eventDec={this.dec}></Botoes>
            </div>
        );
    }
}