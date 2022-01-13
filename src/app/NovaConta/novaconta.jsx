import React from 'react';
import {Link}  from 'react-router-dom';
import './novaconta.css';

function NovaConta(){
    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Novo usuário</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label for="floatingInput">E-mail</label>
        </div>

        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label for="floatingPassword">Senha</label>
        </div>

        <div className="form-floating">
          <input type="name" className="form-control" id="floatingInput" placeholder="Código" />
          <label for="floatingInput">Código de Administrador</label>
        </div>
        
        <button className="w-100 btn btn-lg btn-primary" type="submit">Criar conta</button>

        <div className="login-links mt-5">
          <Link to="/app/login" className="mx-3">Já tenho uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por <a href='/'>SiEstoque</a></p>
      </form>
    </div>
  }

export default NovaConta;