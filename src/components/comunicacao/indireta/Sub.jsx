import react from "react";

export default (props) => {
    return (
        <div >
            <button onClick={() => {
                props.myclick(Math.random(), 'Gerado!');
            }}>Alterar</button>
        </div>
    );
}