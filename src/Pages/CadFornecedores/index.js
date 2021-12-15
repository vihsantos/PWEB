import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from 'configuracoes/Firebase';
import './cf-styles.css';

export default function CadFornecedores(){
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [endereço, setEndereço] = useState("");
    const [prodoferecidos, setProdoferecidos] = useState("");
    const [contatoempresa, setContatoempresa] = useState("");

    const fornecedorCollectionRef= collection(db, "fornecedor")

    const cadastrarFornecedor = async () => {
        await addDoc(fornecedorCollectionRef, {
            nome: nome,
            cnpj: cnpj,
            endereço: endereço,
            prodoferecidos: prodoferecidos,
            contatoempresa: contatoempresa,
        })
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
                <input type="text" placeholder="Digite quais são os produtos oferecidos..." onChange={(event)=>{setNome(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="contatoempresa">Contato da empresa:</label>
                <input type="text" placeholder="Digite o contato da empresa..." onChange={(event)=>{setContatoempresa(event.target.value)}}></input>
            </div>
            <div className="botao-cadastrar-cl" onClick={cadastrarFornecedor}>
                Cadastrar
            </div>
        </div>
    );
}