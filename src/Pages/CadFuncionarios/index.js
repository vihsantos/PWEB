import { addDoc, collection, doc, DocumentSnapshot } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from 'configuracoes/firebase';
import './cfun-styles.css';

export default function CadFuncionarios(){
    const [nome, setNome]= useState('');
    const [cargo, setCargo]= useState('');
    const [cpf, setCpf]= useState('');
    const [rg, setRG]= useState('');
    const [privacessos, setPrivacessos]= useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');

    const funcionarioCollectionRef= collection(db, "funcionarios")

    // const [select, setSelect]= useState();

    const cadastrarFuncionario = async () =>{
        await addDoc(funcionarioCollectionRef, {
            nome: nome,
            cargo: cargo,
            cpf: cpf,
            rg: rg,
            privacessos: privacessos,
            email: email,
            senha: senha
        })

        // await createUserWithEmailAndPassword(email, senha)
        // .then((userCredential) => {
        //     // Signed in
        //     var user = userCredential.user;
        //     // ...
        // })
        // .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ..
        // });
    };

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
            <div className="botao-cadastrar-cl" onClick={cadastrarFuncionario}>
                Cadastrar
            </div>
        </div>
    );
}
//<div className="text-field">
//<label htmlFor="pvacessos">Privilégios de acesso:</label>
//<input type="text" placeholder="Insira ..." ></input>
//</div>