import React from "react";
import './card.css';


export default props =>
    <div className="card" style={{borderColor: props.color}}>
        <div className="content">
            {props.children}
        </div>
        <div className="footer" style={{backgroundColor: props.color}}>
            {props.titulo}
        </div>
    </div>