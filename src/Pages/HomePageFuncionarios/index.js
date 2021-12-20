import "./hm_funcionarios.css";
import NavBarFuncionarios from "../componentes/NavBarFuncionarios"
import React, { useEffect, useState } from "react";
import { getDetReservasf } from "../../configuracoes/Firebase";

export default function HomePageFuncionarios(){

    const [detReservasf, setDetReservasf] = useState([]);

    useEffect(()=>{

        getDetReservasf().then(reservasf => {
            setDetReservasf(
                reservasf.map((r)=>{
                    return {
                        id: r.id,
                        nome: r.nome,
                        estado: r.estado,
                        nomeveiculo: r.nomeveiculo,
                    }
                })
            )
        })
      
    }, [])
    

    return(
        <div className="container-hmfuncionarios">
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className="content-hmf">
                    <div className="titulo-reservaspendententes">
                        Reservas Pendentes:
                    </div>
                <div className="row-detReservasf"> 
                    {   
                        detReservasf.map((detReserva)=>{
                            return(
                                detReserva ?
                                <div className="card-reservasf-pendentes" id={detReserva.id}>
                                    <div className="campo-reservasf">
                                        <div className="label-reservasf">Cliente:</div>
                                        <div className="valor-reservasf"> {detReserva.nome}</div>
                                    </div>
                                    <div className="campo-reservasf">
                                        <div className="label-reservasf">Veiculo:</div>
                                        <div className="valor-reservasf"> {detReserva.nomeveiculo}</div>
                                    </div>
                                    <div className="campo-reservasf">
                                        <div className="label-reservasf">Estado:</div>
                                        <div className="valor-reservasf"> {detReserva.estado}</div>
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