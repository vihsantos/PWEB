import "./reservas-styles.css"
import NavBarFuncionarios from "../componentes/NavBarFuncionarios"
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '/pweb/src/configuracoes/Firebase';

export default function Reservas(){
    const [reservasf, setReservasf] = useState([]);
    const reservasfCollectionsRef = collection(db, "reservasf");
    useEffect(()=>{

        const getreservasf = async () =>{
            const data = await getDocs(reservasfCollectionsRef);
            setReservasf(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
            console.log(data);
        }
        getreservasf()
    }, )

    return (
        <div className="container-reservasf">
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className="content-reservasf">
                {
                    reservasf.map((reservaf)  =>{
                        return(
                            <div className="card-reservasf" id={reservaf.id}>
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