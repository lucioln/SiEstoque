import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar';
import ListaProdutos from '../Components/ListaProdutos/listaprodutos';
import './home.css';

import produtosPDF from '../Reports/Produtos/produtos';


import firebase from "../Config/firebase";
import 'firebase/firestore';

import SweetAlert from 'react-bootstrap-sweetalert';

function Home(){
  
    const [produtos, setProdutos] = useState([]);
    const [busca, setBusca] = useState('');
    const [excluido, setExcluido] = useState('');
    const [confirmacao, setConfirmacao] = useState(false);
    const [confirmacaoId, setConfirmacaoId] = useState(false);

    function deleteProduto(id){
      firebase.firestore().collection('produtos').doc(id).delete().then(()=>{
        setExcluido(id);
        setConfirmacao(false);
      })
    }

    function confirmeDeleteProduto(id){
      setConfirmacaoId(id);
      setConfirmacao(true);
    }
    
    //acesso ao banco de produtos na firestore
    useEffect(() => { 

      let listaProd = [];
      
        firebase.firestore().collection('produtos').get().then(async(resultado)=>{
            await resultado.docs.forEach((doc)=>{
              if(doc.data().nome.indexOf(busca)>= 0){
                listaProd.push({
                    id: doc.id,
                    codigo: doc.data().codigo,
                    nome:doc.data().nome,
                    categoria:doc.data().categoria,
                    quantidade:doc.data().quantidade,
                    validade: doc.data().validade, 
                })
              }
            })

            setProdutos(listaProd)
        }).catch()
    },[busca, excluido]); //fim do acesso ao banco de produtos na firestore 

    return <div>
      <Navbar/>
      <div className='container-fluid titulo'>
        <h1>Cadastro de Produtos</h1>
        <div className='row'>
            <div className='col-4'>
                <Link to='/app/novoproduto' className='btn btn-primary btn-cli'><i className='fas fa-plus'> </i> Produto</Link>
                <button onClick={(e)=>produtosPDF(produtos)} className="btn btn-danger btn-cli" type="button" id="button-addon2"><i className='fas fa-file-pdf'></i> Gerar relatório</button>
            </div>
            <div className='col-8'>
              <div className="input-group mb-3">
                <input onChange={(e)=>{setBusca(e.target.value)}} type="text" className="form-control" placeholder="Pesquisar por nome" aria-label="Pesquisar por código" aria-describedby="button-addon2"/>
                <button className="btn btn-primary" type="button" id="button-addon2 btn-cli"><i className='fas fa-search'></i> Pesquisar</button>
              </div>
            </div>
        </div> 
        <ListaProdutos arrayProdutos={produtos}  ClickParaDeletar={confirmeDeleteProduto}/>
        { confirmacao ? <SweetAlert
          warning
          showCancel
          showCloseButton
          confirmBtnText="Sim"
          confirmBtnBsStyle="danger"
          cancelBtnText='Não'
          cancelBtnBStyle="light"
          title="Exclusão"
          onConfirm={()=>deleteProduto(confirmacaoId)}
          onCancel={()=>setConfirmacao(false)}
          reverseButtons
        >
          Deseja excluir o produto selecionado?
        </SweetAlert> : null
        }

      </div>
    </div>
  }

export default Home;