import "./sp-styles.css";
import { Link } from 'react-router-dom';

export default function StartPage(){
    return (
        <main>
            <div className="container">
                <header>
                    <h1>PWEB</h1>
                    <p>Locação de veículos com apenas um clique.</p>
                </header>
                <div className="imagem">
                    <img src="http://www.alexandreautomoveisrp.com.br/images/carros.png" alt="carros"></img>
                </div>
                <div className="botoes"> 
                    <Link to={`/login`} >
                    <div className="botao-login">
                            Login
                        </div>
                    </Link>
                    <Link to={`/cadcliente`} >
                        <div className="botao-cadastrar">
                            Cadastrar
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}