import React,{useContext} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

/* Paginas */
import Site from './site/site.jsx';
import Login from './app/Login/login';
import NovaConta from './app/NovaConta/novaconta';
import ResetSenha from './app/ResetSenha/resetsenha';
import Home from './app/Home/home';
import NovoProduto from './app/NovoProduto/novoproduto';
import EditarProduto from './app/EditarProduto/editarproduto';
import { AuthContext } from './app/Context/auth.jsx';

function App(){

    const {logado} = useContext(AuthContext);
    console.log(logado);

    function RotaSegura({...params}){
      if(!logado){
        return <Redirect to='/app/login' />
      }else {
      return <Route  {...params}/>
      }
    }

    return <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Site} />    
    <Route exact path='/app/login' component={Login} />    
    <Route exact path='/app/novaconta' component={NovaConta} />    
    <Route exact path='/app/resetsenha' component={ResetSenha} />    
    
    <RotaSegura exact path='/app/home' component={Home} />    
    <RotaSegura exact path='/app/novoproduto' component={NovoProduto} />    
    <RotaSegura exact path='/app/editarproduto/:id' component={EditarProduto} />    
    </Switch>
    </BrowserRouter>;
  }
 
export default App;