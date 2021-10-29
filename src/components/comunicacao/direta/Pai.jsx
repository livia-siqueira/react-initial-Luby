import react from "react";
import Filho from "./Filho";

export default (props) => {
    return (
        <div>
            <Filho {...props}>Flávia</Filho>
            <Filho sobrenome="Siqueira">Livia</Filho>
            <Filho sobrenome="Siqueira">Lucia</Filho>
            <Filho sobrenome="Siqueira">Odair</Filho>
            <Filho sobrenome={props.sobrenome}>Benedita</Filho>
        </div>
    );
}