import react, {useState} from "react";

export default (props) => {
    const [nome, setNome] = useState('Pedro');
    
    return (
        <div >
            <h1>{nome}</h1>
            <input type="text" onChange={e => setNome(e.target.value)} value={nome}></input> {/* componentes controlados - amarrado ao estado, em uma direção, muda atras muda frente */}
        </div>
    );
}