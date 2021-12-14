import "./styles-login.css";
import { Link } from 'react-router-dom';


export default function Login(){
    return(
        <main>
            <div className="container-login">
                <div className="titulo">
                    LOGIN
                </div>
                <div className="text-field">
                    <label htmlFor="email">Email:</label>
                    <input type="text" placeholder="Digite o seu email..." ></input>
                </div>
                <div className="text-field">
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" placeholder="Digite a sua senha..."></input>
                </div>
                <button className="botao-entrar" >
                    Entrar
                </button>
            </div>
        </main>
    );
}