import React, {useState} from "react";


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
    
    render(){
        return(
            <div>
                <h2>Contador</h2>
                <label for="passoInput">Passo: </label>
                <input if="passoInput" type="number" value={this.state.passo} 
                onChange={e => this.setState({passo: +e.target.value})} />
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}>Incrementa</button>
                    <button onClick={this.dec}>Decrementa</button>
                </div>
            </div>


        );
    }
}