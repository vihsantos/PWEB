import './cfun-styles.css';

export default function CadFuncionarios(){
    return (
        <div className='container-cadfun'>
           <div className="titulo">
                CADASTRAR FUNCIONÁRIOS
            </div>
            <div className="text-field">
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Digite o seu nome..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="cargo">Cargo:</label>
                <input type="text" placeholder="Digite o cargo..." ></input>
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
                <label htmlFor="pvacessos">Privilégios de acesso:</label>
                <input type="text" placeholder="Insira ..." ></input>
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