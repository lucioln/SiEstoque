import React from "react";
import { useState } from "react/cjs/react.development";

const AuthContext = React.createContext({});

function AuthProvedor(props){
    let isLogado = localStorage.getItem('logado');
    const [logado, setLogado] = useState(isLogado === "S" ? true : false);

    return (
        <AuthContext.Provider value={{logado, setLogado}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvedor};