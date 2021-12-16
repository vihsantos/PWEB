import "./hm_funcionarios.css";
import NavBarFuncionarios from "../componentes/NavBarFuncionarios"
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '/pweb/src/configuracoes/Firebase';

export default function HomePageFuncionarios(){
    
    const [detVeiculos, setDetVeiculos] = useState([]);
    const reservasRef = collection(db, "reservasf");

    useEffect(()=>{
        const getDetReservasf = async()=>{
            const customerQuery = query(
                reservasRef,
                where('estado', '==', 'pendente')
            )
    
            const dataV = await getDocs(customerQuery);
                setDetVeiculos(dataV.docs.map((doc) => ({
                    ...doc.data(), id: doc.id
                })))
            
            console.log(dataV);
        }
        getDetReservasf()
    })

    return(
        <div className="container-hmfuncionarios">
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className="content-hmf">
                    <div className="titulo-reservaspendententes">
                        Reservas Pendentes:
                    </div>
                <div className="row-detVeiculos"> 
                    {   
                        detVeiculos.map((detVeiculo)=>{
                            return(
                                detVeiculo ?
                                <div className="card-reservasf-pendentes" id={detVeiculo.id}>
                                    <div className="campo-reservasf">
                                        <div className="label-reservasf">Cliente:</div>
                                        <div className="valor-reservasf"> {detVeiculo.nomeCliente}</div>
                                    </div>
                                    <div className="campo-reservasf">
                                        <div className="label-reservasf">Veiculo:</div>
                                        <div className="valor-reservasf"> {detVeiculo.veiculo}</div>
                                    </div>
                                    <div className="campo-reservasf">
                                        <div className="label-reservasf">Estado:</div>
                                        <div className="valor-reservasf"> {detVeiculo.estado}</div>
                                    </div>
                                </div>
                                :
                                <div className="detReservaEmpty">
                                    Não existe nenhuma reserva pendente
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}