import "./styles-cadcliente.css";

export default function CadastrarCliente(){
    return(
        <div className="container-cadcliente">
            <div className="titulo">
                CADASTRAR CLIENTE
            </div>
            <div className="text-field">
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Digite o seu nome..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="cpf">CPF:</label>
                <input type="text" placeholder="Digite o seu CPF..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="rg">RG:</label>
                <input type="text" placeholder="Digite o seu RG..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" placeholder="Digite o seu email..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="cnh">CNH:</label>
                <input type="text" placeholder="Digite a sua CNH..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="Digite o seu email..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="senha">Senha:</label>
                <input type="text" placeholder="Digite a sua senha..." ></input>
            </div>
            <div className="botao-cadastrar-cl">
                Cadastrar
            </div>
        </div>
    );
}