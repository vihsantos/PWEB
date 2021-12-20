import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db , auth} from '/pweb/src/configuracoes/Firebase';
import "./styles-cadcliente.css";

export default function CadastrarCliente(){
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [rg, setRG] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cnh, setCnh] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    console.log(db);

    const cadastrarCliente = async ()=> {
        
        try {
                await addDoc(collection(db, "clientes"),{
                    nome: nome,
                cpf: cpf,
                rg: rg,
                endereco: endereco,
                cnh: cnh,
                email: email,
                senha: senha
                  })              
                  const user = await createUserWithEmailAndPassword(auth, email, senha);
            console.log(user);

        } catch(error){
            console.log(error.message);
        }
    };

    return(
        <div className="container-cadcliente">
            <div className="titulo">
                CADASTRAR CLIENTE
            </div>
            <div className="text-field">
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Digite o seu nome..." onChange={(event)=>{setNome(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="cpf">CPF:</label>
                <input type="text" placeholder="Digite o seu CPF..." onChange={(event)=>{setCPF(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="rg">RG:</label>
                <input type="text" placeholder="Digite o seu RG..." onChange={(event)=>{setRG(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" placeholder="Digite o seu endereço..." onChange={(event)=>{setEndereco(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="cnh">CNH:</label>
                <input type="text" placeholder="Digite a sua CNH..." onChange={(event)=>{setCnh(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="Digite o seu email..." onChange={(event)=>{setEmail(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="Digite a sua senha..." onChange={(event)=>{setSenha(event.target.value)}}></input>
            </div>
            <button className="botao-cadastrar-cl" onClick={cadastrarCliente}>
                Cadastrar
            </button>
        </div>
    );
}