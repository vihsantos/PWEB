import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from 'configuracoes/Firebase';
import './cv-styles.css';

export default function CadVeiculos(){
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [marca, setMarca] = useState('');
    const [placa, setPlaca] = useState('');
    const [chassi, setChassi] = useState('');
    const [renovam, setRenovam] = useState('');
    const [cadeiras, setCadeiras] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [cor, setCor] = useState('');
    const [gps, setGPS] = useState("");

    const veiculosCollectionRef= collection(db, "veiculos")

    const cadastrarVeiculos = async () => {
        await addDoc(veiculosCollectionRef, {
            nome: nome,
            imagem: imagem,
            marca: marca,
            placa: placa,
            chassi: chassi,
            renovam: renovam,
            cadeiras: cadeiras,
            classificacao: classificacao,
            cor: cor,
            gps: gps,
        })
    }

    return (
        <div className='container-cadv'>
           <div className="titulo">
                CADASTRAR VEICULOS
            </div>
            <div className="text-field">
                <label htmlFor="nome">Nome do veiculo:</label>
                <input type="text" placeholder="Digite o nome do veiculo..." onChange={(event)=>{setNome(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="imagem">Imagem:</label>
                <input type="text" placeholder="Insira o link da imagem do veiculo..." onChange={(event)=>{setImagem(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="marca">Marca:</label>
                <input type="text" placeholder="Digite a marca do veiculo..." onChange={(event)=>{setMarca(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="placa">Placa:</label>
                <input type="text" placeholder="Digite a placa do veiculo..." onChange={(event)=>{setPlaca(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="chassi">Chassi:</label>
                <input type="text" placeholder="Digite o chassi do veiculo..." onChange={(event)=>{setChassi(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="renovam">Renovam:</label>
                <input type="text" placeholder="Digite o renovam do veiculo..." onChange={(event)=>{setRenovam(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="cadeiras">Cadeiras:</label>
                <input type="text" placeholder="Insira a quantidade de cadeiras..." onChange={(event)=>{setCadeiras(event.target.value)}}></input>
            </div>
            <div className="select-field">
                <label htmlFor="classificacao">Classificação:</label>
                <select name='classificacao' id='classificacao' className='drop-box' value={classificacao} onChange={(event)=>{setClassificacao(event.target.value)}}>
                    <option disabled={true} value="">Insira a classificação do veiculo...</option>
                    <option>Familiar</option>
                    <option>Utilitario</option>
                    <option>Passeio</option>
                </select>
            </div>
            <div className="text-field">
                <label htmlFor="cor">Cor:</label>
                <input type="text" placeholder="Insira a cor do veiculo..." onChange={(event)=>{setCor(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="gps">GPS:</label>
                <input type="text" placeholder="O veículo possui GPS?" onChange={(event)=>{setGPS(event.target.value)}}></input>
            </div>
            <div className="botao-cadastrar-cl" onClick={cadastrarVeiculos}>
                Cadastrar
            </div>
        </div>
    );
}
