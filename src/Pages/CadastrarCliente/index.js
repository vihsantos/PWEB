import React, { useState } from "react";
import { cadastrarCliente } from "../../configuracoes/Firebase";
import "./styles-cadcliente.css";

export default function CadastrarCliente(){

    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [rg, setRG] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cnh, setCnh] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const aoClick = async () => {
        await  cadastrarCliente(nome, cpf, rg, endereco, cnh, email, senha)
    }

    return(
        <div className="container-cadcliente">
            <div className="titulo">
                CADASTRAR CLIENTE
            </div>
            <div className="text-field">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" placeholder="Digite o seu nome..." onChange={(event)=>{setNome(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" placeholder="Digite o seu CPF..." onChange={(event)=>{setCPF(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="rg">RG:</label>
                <input type="text" id="rg" placeholder="Digite o seu RG..." onChange={(event)=>{setRG(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" id="endereco" placeholder="Digite o seu endereço..." onChange={(event)=>{setEndereco(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="cnh">CNH:</label>
                <input type="text" id="cnh" placeholder="Digite a sua CNH..." onChange={(event)=>{setCnh(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder="Digite o seu email..." onChange={(event)=>{setEmail(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" placeholder="Digite a sua senha..." onChange={(event)=>{setSenha(event.target.value)}}></input>
            </div>
            <button className="botao-cadastrar-cl" onClick={() => aoClick()}>
                Cadastrar
            </button>
        </div>
    );
}

