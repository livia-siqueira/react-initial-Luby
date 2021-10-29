import React from "react";

export default (props) => {
    return (
        <div>
            <div>
                <button onClick={props.eventInc}>Incrementa</button>
                <button onClick={props.eventDec}>Decrementa</button>
            </div>
        </div>


    );
}