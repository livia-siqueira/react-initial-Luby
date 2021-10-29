import React from "react";
import If from "./If2";

export  default props =>{
    return(
        <div>
            <h2>O número é {props.numero}</h2>
            <If test={props.numero % 2 === 0}>
                <p>Número é par</p>
            </If>
            <If test={props.numero % 2 !== 0}>
                <p>Número é impar</p>
            </If>
        </div>
    )
}