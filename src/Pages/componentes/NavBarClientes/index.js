import "./nc-styles.css";
import { Link } from 'react-router-dom';
import BotaoSair from "/pweb/src/assets/botaosair.png"


export default function NavBarClientes(){
    return (
        <div className="nav-bar-clientes">
            <h1>
                PWEB
            </h1>
            <ul>
                    <li><Link to="/homec">Home</Link></li>
                    <li><Link to="/veiculosc">Veículos</Link></li>
                    <li><Link to="">Reservar</Link></li>
                    <li>
                        <div className="sair" >
                            <img className="botao-sair" src={BotaoSair} alt="sair"></img>
                        </div>
                    </li>
                </ul>
        </div>
    )
}