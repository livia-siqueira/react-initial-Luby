import React from "react";
import If from "./If";

export default props =>{
    return(
        <div>
            <h2>O número é {props.numero}</h2>
            <If numero= {props.numero}></If>
            {/*props.numero % 2 === 0 ? <p>É par</p>:<p>É immpar</p>*/}
        </div>
    )
}