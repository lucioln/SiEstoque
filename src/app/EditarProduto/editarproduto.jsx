import React from 'react';
import './editarproduto.css';
import Navbar from '../Components/Navbar/navbar';
import { useState, useEffect} from 'react/cjs/react.development';
import { Redirect, Link } from 'react-router-dom';

import firebase from '../Config/firebase';
import 'firebase/firestore';

function EditarProduto(props) {
  
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [qtd, setQtd] = useState("");
  const [validade, setValidade] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState("");

  const db = firebase.firestore();

  useEffect(()=>{
    firebase.firestore().collection('produtos').doc(props.match.params.id).get().then(async(resultado)=>{
      await setNome(resultado.data().nome)
      setCategoria(resultado.data().categoria)
      setQtd(resultado.data().quantidade)
      setValidade(resultado.data().validade)

    })
  },[props.match.params.id])

  function AlterarProduto(){
    if(nome.length===0){
      setMensagem("informe o nome");
    }else if (categoria.length===0){
      setMensagem("informe a categoria");
    }else if((qtd.length===0)){
      setMensagem("quantidade inválida");
      console.log(qtd.type);
    }else if(validade.length===0){
      console.log(qtd.type);
      setMensagem('se não for perecivel digite um " - ou null "');
    }else {
    db.collection('produtos').doc(props.match.params.id).update({
      nome: nome,
      categoria: categoria,
      quantidade: qtd,
      validade: validade
    }).then(()=>{
      setMensagem('');
      setSucesso('S');
    }).catch((erro)=>{
      setMensagem(erro);
      setSucesso('N');
    })
    }
    } 


  return <div>
    <Navbar />
    <div className="container-fluid titulo">

      <div className="offset-lg-3 col-lg-6">
        <h1>Editar Produto</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">Código</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  disabled/>
          </div>

          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">Nome</label>
            <input onChange={e=> setNome(e.target.value)} value={nome} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="Categoria" className="form-label">Categoria</label>
            <input onChange={e=> setCategoria(e.target.value)} value={categoria} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="Quantidade" className="form-label">Quantidade</label>
            <input onChange={e=> setQtd(parseInt(e.target.value))} value={qtd} type="integer" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="Validade" className="form-label">Validade</label>
            <input onChange={e=> setValidade(e.target.value)} value={validade} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="text-center">
            <Link to="/app/home" type="button" className="btn btn-outline-primary btn-acao">Cancelar</Link>
            <button onClick={AlterarProduto} type="button" className="btn btn-primary btn-acao">Salvar</button>
          </div>
          
          {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
          {sucesso==="S"? <Redirect to='/app/home' /> : null}

        </form>
      </div>
    </div>
  </div>;
}

export default EditarProduto;