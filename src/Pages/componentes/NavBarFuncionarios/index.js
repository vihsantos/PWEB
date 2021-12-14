import "./nbf-styles.css";
import { Link } from 'react-router-dom';
import BotaoSair from "/pweb/src/assets/botaosair.png"


export default function NavBarFuncionarios(){
    return(
        <nav className="nav-bar-funcionarios">
                <h1>
                    PWEB
                </h1>
                <ul>
                    <li><Link to="/homef">Home</Link></li>
                    <li><Link to="/veiculosf">Veículos</Link></li>
                    <li><Link to="/funcionarios">Funcionários</Link></li>
                    <li><Link to="/fornecedores">Fornecedores</Link></li>
                    <li><Link to="/reservas">Reservas</Link></li>
                    <li>
                        <div className="sair" >
                            <img className="botao-sair" src={BotaoSair} alt="sair"></img>
                        </div>
                    </li>
                </ul>
            </nav>
    );
}