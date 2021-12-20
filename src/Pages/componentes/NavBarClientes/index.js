import "./nc-styles.css";
import { Link } from 'react-router-dom';
import BotaoSair from "/pweb/src/assets/botaosair.png"
import React from "react";


export default function NavBarClientes(){
    return (
        <div className="nav-bar-clientes">
            <h1>
                PWEB
            </h1>
            <ul>
                    <li><Link to="/homec">Home</Link></li>
                    <li><Link to="/reservasc">Minhas Reservas</Link></li>
                    <li>
                        <div className="sair" >
                            <img className="botao-sair" src={BotaoSair} alt="sair"></img>
                        </div>
                    </li>
                </ul>
        </div>
    )
}