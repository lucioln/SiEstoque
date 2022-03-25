import React from "react";
import { Link } from "react-router-dom";
import './listaprodutos.css';

function ListaProdutos(props){

    return <table className="table table-striped table-hover table-bordered">
        <thead>
            <tr className="table-dark">
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">Categoria</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Validade</th>
                <th scope="col" className="col-acao"></th>
            </tr>
            {
                props.arrayProdutos.map((produto)=>{
                    return <tr className="table-light" key={produto.id}>
                    <th scope="row">{produto.id}</th>
                    <th>{produto.nome}</th>
                    <th>{produto.categoria}</th>
                    <th>{produto.quantidade}</th>
                    <th>{produto.validade}</th>
                    <th>
                            <Link to={`/app/editarproduto/${produto.id}`}><i className="fas fa-edit icone-tabela"> </i></Link>
                            <Link to='#' onClick={()=>props.ClickParaDeletar(produto.id)}><i className="fas fa-trash-alt icone-tabela red"> </i></Link>
                    </th>
                    
                </tr>
                })
            }
        </thead>
    </table>
}

export default ListaProdutos;