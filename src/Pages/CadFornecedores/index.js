import React, { useState } from 'react';
import './cf-styles.css';
import { cadastrarFornecedor } from '../../configuracoes/Firebase';

export default function CadFornecedores(){
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [endereço, setEndereço] = useState("");
    const [prodoferecidos, setProdoferecidos] = useState("");
    const [contatoempresa, setContatoempresa] = useState("");

    const aoClickfor = async () => {
        await  cadastrarFornecedor(nome, cnpj, endereço, prodoferecidos, contatoempresa)
    }


    return (
        <div className='container-cf'>
            <div className="titulo">
                CADASTRAR FORNECEDORES
            </div>
            <div className="text-field">
                <label htmlFor="nome">Nome da empresa:</label>
                <input type="text" placeholder="Digite o nome da empresa..." onChange={(event)=>{setNome(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="cnpj">CNPJ:</label>
                <input type="text" placeholder="Digite o CNPF..." onChange={(event)=>{setCnpj(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" placeholder="Digite o endereço da empresa..." onChange={(event)=>{setEndereço(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="prodoferecidos">Produtos Oferecidos:</label>
                <input type="text" placeholder="Digite quais são os produtos oferecidos..." onChange={(event)=>{setProdoferecidos(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="contatoempresa">Contato da empresa:</label>
                <input type="text" placeholder="Digite o contato da empresa..." onChange={(event)=>{setContatoempresa(event.target.value)}}></input>
            </div>
            <div className="botao-cadastrar-cl" onClick={()=>aoClickfor()}>
                Cadastrar
            </div>
        </div>
    );
}