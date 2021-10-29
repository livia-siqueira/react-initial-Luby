import react, { useState } from "react";
import Sub from "./Sub";

export default (props) => {

    const [text, setText] = useState('Valor');
    const [num,setNum] = useState(0)

    function click(getValue, string){
        setNum(getValue);
        setText(string);
    }

    return (
        <div>
            <h4>{text}: {num}</h4>
            <Sub myclick={click}></Sub> {/* passei para o filho uma funcao e ele me retorna algo */}
        </div>
    );
}