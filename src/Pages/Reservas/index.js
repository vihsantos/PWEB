import "./reservas-styles.css"
import NavBarFuncionarios from "../componentes/NavBarFuncionarios"
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getReservasf } from "../../configuracoes/Firebase";

export default function Reservas(){
    
     const [reservasf, setReservasf] = useState([]);

     useEffect(()=>{

        getReservasf().then(reservasf => {
            setReservasf(
                reservasf.map((r)=>{
                    return {
                        id: r.id,
                        nomeCliente: r.nomeCliente,
                        estado: r.estado,
                        veiculo: r.veiculo,
                    }
                })
            )
        })

     }, [])

    return (
        <div className="container-reservasf">
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className="content-reservasf">
                {
                    reservasf.map((reservaf)  =>{
                        return(
                            <div className="card-reservasf" id={reservaf.id} 
                            onClick={<Navigate to={{ pathname: "/devolucao",}}
                              />}>
                                <div className="campo-reservasf">
                                    <div className="label-reservasf">Cliente:</div>
                                    <div className="valor-reservasf"> {reservaf.nomeCliente}</div>
                                </div>
                                <div className="campo-reservasf">
                                    <div className="label-reservasf">Veiculo:</div>
                                    <div className="valor-reservasf"> {reservaf.veiculo}</div>
                                </div>
                                <div className="campo-reservasf">
                                    <div className="label-reservasf">Estado:</div>
                                    <div className="valor-reservasf"> {reservaf.estado}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}