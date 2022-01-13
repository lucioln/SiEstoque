import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/* Paginas */
import Site from './site/site.jsx';
import Login from './app/Login/login';
import NovaConta from './app/NovaConta/novaconta';
import ResetSenha from './app/ResetSenha/resetsenha';
import Home from './app/Home/home';
import NovoProduto from './app/NovoProduto/novoproduto';

function App(){
    return <BrowserRouter>
    <Route exact path='/' component={Site} />    
    <Route exact path='/app/login' component={Login} />    
    <Route exact path='/app/novaconta' component={NovaConta} />    
    <Route exact path='/app/resetsenha' component={ResetSenha} />    
    <Route exact path='/app/home' component={Home} />    
    <Route exact path='/app/novoproduto' component={NovoProduto} />    
    </BrowserRouter>;
  }
 
export default App;