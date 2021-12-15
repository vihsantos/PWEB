import "./styles-login.css";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from 'configuracoes/firebase';


export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, senha);
            
            console.log(user);

        } catch(error){
            console.log(error.message);
        }
    }

    return(
        <main>
            <div className="container-login">
                <div className="titulo">
                    LOGIN
                </div>
                <div className="text-field">
                    <label htmlFor="email">Email:</label>
                    <input type="text" placeholder="Digite o seu email..." onChange={(event)=>{setEmail(event.target.value)}}></input>
                </div>
                <div className="text-field">
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" placeholder="Digite a sua senha..." onChange={(event)=>{setSenha(event.target.value)}}></input>
                </div>
                <button className="botao-entrar" >
                    Entrar
                </button>
            </div>
        </main>
    );
}