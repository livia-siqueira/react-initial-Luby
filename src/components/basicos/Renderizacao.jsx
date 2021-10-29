import React from "react";
import Produtos from "../../data/produtos";

export default (props) => {
    function getProduct() {
        return Produtos.map(produto => {
            return <li key={produto.id}>{produto.id} - {produto.name} = {produto.price}</li>
        });
    }
    return (

        <div>
            <h3>Repeticao</h3>
            <ul>
                {getProduct()};
            </ul>
        </div>

    );

}