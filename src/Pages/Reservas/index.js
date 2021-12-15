import "./reservas-styles.css"
import NavBarFuncionarios from "../componentes/NavBarFuncionarios"
import React from "react";

export default function Reservas(){
    return (
        <div className="container-reservasf">
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className="content-reservasf">
                <div className="card-reservasf">
                    <div className="campo-reservasf">
                        <div className="label-reservasf">Cliente:</div>
                        <div className="valor-reservasf"> Qualquer</div>
                    </div>
                    <div className="campo-reservasf">
                        <div className="label-reservasf">Veiculo:</div>
                        <div className="valor-reservasf"> Qualquer</div>
                    </div>
                    <div className="campo-reservasf">
                        <div className="label-reservasf">Aprovacão:</div>
                        <div className="valor-reservasf"> Qualquer</div>
                    </div>
                </div>
            </div>
        </div>
    );
}