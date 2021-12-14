import "./veiculosf-styles.css";
import NavBarFuncionarios from "../componentes/NavBarFuncionarios";
import IconAdd from "/pweb/src/assets/icon-add.png";
import { useState, useEffect } from 'react';
import {  db } from '/pweb/src/services/firebase.js';
import {getFirestore, getDocs, collection} from 'firebase/firestore';


//updateDoc, deleteDoc, doc, addDoc,

export default function VeiculosF(){

    return(
        <div className="container-veiculosf">
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className="content-veicf">
                {/* {
                    veiculos.map((veiculo) => {
                        return(
                            <div className="card-veiculo" key={veiculo.id}>
                                <img className="carro-image" src={veiculo.imagem} alt="carrinho"></img>
                                <div className="nome-veiculo">{veiculo.nome}</div>
                                <div className="campos-cardveiculo">
                                    <div className="label-cardveiculo">Cor:</div>
                                    <div className="valor-cardveiculo">{veiculo.cor}</div>
                                </div>
                                <div className="campos-cardveiculo">
                                    <div className="label-cardveiculo">Classificação:</div>
                                    <div className="valor-cardveiculo">{veiculo.classificacao}</div>
                                </div>
                                <div className="campos-cardveiculo">
                                    <div className="label-cardveiculo">Cadeiras:</div>
                                    <div className="valor-cardveiculo">{veiculo.cadeiras}</div>
                                </div>
                                <div className="campos-cardveiculo">
                                    <div className="label-cardveiculo">Marca:</div>
                                    <div className="valor-cardveiculo">{veiculo.marca}</div>
                                </div>
                                <div className="campos-cardveiculo">
                                    <div className="label-cardveiculo">Placa:</div>
                                    <div className="valor-cardveiculo">{veiculo.placa}</div>
                                </div>
                                <div className="campos-cardveiculo">
                                    <div className="label-cardveiculo">Renovam:</div>
                                    <div className="valor-cardveiculo">{veiculo.renovam}</div>
                                </div>
                                <div className="campos-cardveiculo">
                                    <div className="label-cardveiculo">Chassi:</div>
                                    <div className="valor-cardveiculo">{veiculo.chassi}</div>
                                </div>
                            </div>
                        );
                    })
                } */}
                <div className="adicionar-veicf" >
                    <img src={IconAdd} alt="adicionar" className="adicionar-img">
                    </img>
                </div>
            </div>
        </div>
    );
}







// id: docs.id,
// nome: docs.nome,
// cor: docs.cor,
// marca: docs.marca,
// classificacao: docs.classificacao,
// placa: docs.placa,
// cadeiras: docs.cadeiras,
// renovam: docs.renovam,
// chassi: docs.nome,