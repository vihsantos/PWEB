import React, { useState } from 'react';
import './cfun-styles.css';
import { cadastrarFuncionario } from '../../configuracoes/Firebase';

export default function CadFuncionarios(){
    
    const [nome, setNome]= useState('');
    const [cargo, setCargo]= useState('');
    const [cpf, setCpf]= useState('');
    const [rg, setRG]= useState('');
    const [privacessos, setPrivacessos]= useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');

    const aoClickcf = async () => {
        await  cadastrarFuncionario(nome, cargo, cpf, rg, privacessos, email, senha)
    }

    return (
        <div className='container-cadfun'>
           <div className="titulo">
                CADASTRAR FUNCIONÁRIOS
            </div>
            <div className="text-field">
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Digite o seu nome..." onChange={(event)=>{setNome(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="cargo">Cargo:</label>
                <input type="text" placeholder="Digite o cargo..." onChange={(event)=>{setCargo(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="cpf">CPF:</label>
                <input type="text" placeholder="Digite o seu CPF..." onChange={(event)=>{setCpf(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="rg">RG:</label>
                <input type="text" placeholder="Digite o seu RG..." onChange={(event)=>{setRG(event.target.value)}}></input>
            </div>
            <div className="select-field">
                <label htmlFor="pvacessos">Privilégios de acesso:</label>
                <select id='pvacessos' value = {privacessos} className='drop-box' onChange={(event)=>{setPrivacessos(event.target.value)}}>
                    <option disabled={true} value="">Insira os privilégios de acesso do funcionário...</option>
                    <option >Todos</option>
                    <option >Ver</option>
                    <option >Editar</option>
                </select>
            </div>
            <div className="text-field">
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="Digite o seu email..." onChange={(event)=>{setEmail(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="Digite a sua senha..." onChange={(event)=>{setSenha(event.target.value)}}></input>
            </div>
            <div className="botao-cadastrar-cl" onClick={()=> aoClickcf()}>
                Cadastrar
            </div>
        </div>
    );
}
//<div className="text-field">
//<label htmlFor="pvacessos">Privilégios de acesso:</label>
//<input type="text" placeholder="Insira ..." ></input>
//</div>