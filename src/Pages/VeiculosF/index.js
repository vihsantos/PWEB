import "./veiculosf-styles.css";
import NavBarFuncionarios from "../componentes/NavBarFuncionarios";
import IconAdd from "/pweb/src/assets/icon-add.png"
import { Link } from 'react-router-dom';
import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import { db } from '/pweb/src/configuracoes/Firebase';
import {collection, getDocs} from "firebase/firestore";


export default function VeiculosF(){
    const [veiculos, setVeiculos] = useState([]);
    const veiculosCollectionsRef = collection(db, "veiculos");
    useEffect(()=>{

        const getVeiculos = async () =>{
            const data = await getDocs(veiculosCollectionsRef);
            setVeiculos(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
        }
        getVeiculos()
    }, [])

    return(
        <div className="container-veiculosf">
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className="content-veicf">
                {
                    veiculos.map((veiculo)=> {
                        return(
                            <div className="card-veiculo" id={veiculo.id}>
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
                }
                <div className="adicionar-veicf" >
                    <Link to="/cadveiculos">
                    <img src={IconAdd} alt="adicionar" className="adicionar-img">
                    </img>
                    </Link>
                </div>
            </div>
        </div>
    );
}
