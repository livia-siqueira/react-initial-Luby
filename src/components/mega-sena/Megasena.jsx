import React, {useState} from "react";

export default (props) => {
    const[numeros, setNumeros] = useState(Array(props.qtdNumber).fill(0));

    function gerarNumeros(){
        const array = Array(props.qtdNumber).fill(0)
        .reduce((ac) => {
            const novoNumero = gerarNumerosRANDOM(ac);
            return [...ac, novoNumero];
        },[])
        .sort((a,b) => a-b);
        setNumeros(array);
    }
    function gerarNumerosRANDOM(array){
        const numero = parseInt(Math.random() * (60 -1)) + 1
        return array.includes(numero) ? gerarNumerosRANDOM(array) : numero;
    }
    return (
        <div>
            <h3>Mega-Sena</h3>
            <h4>{numeros.join(',')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </div>
    );
}