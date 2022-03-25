import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import './novaconta.css';

import firebase from '../Config/firebase';
import 'firebase/auth';

function NovaConta(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function cadastrarUsuario(){
    setMensagem('');

    if (!email || !senha){
      setMensagem('Informe todos os campos');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
      alert('Usuário criado com sucesso');
    }).catch(error => {      
        setMensagem('Erro ao criar conta: ' + error.message);      
    })
  }

    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src="../images/logo.png" alt="SiEstoque logo" />
        <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

        <div className="form-floating">
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label for="floatingInput">E-mail</label>
        </div>

        <div className="form-floating">
          <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label for="floatingPassword">Senha</label>
        </div>
        
        <button onClick={cadastrarUsuario} className="w-100 btn btn-lg btn-primary" type="button">Criar conta</button>

        {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}

        <div className="login-links mt-5">
          <Link to="/app/login" className="mx-3">Já tenho uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por <a href='/'>SiEstoque</a></p>
      </form>
    </div>
  }

export default NovaConta;