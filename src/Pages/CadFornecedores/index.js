import './cf-styles.css';

export default function CadFornecedores(){
    return (
        <div className='container-cf'>
            <div className="titulo">
                CADASTRAR FORNECEDORES
            </div>
            <div className="text-field">
                <label htmlFor="nome">Nome da empresa:</label>
                <input type="text" placeholder="Digite o nome da empresa..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="cnpj">CNPJ:</label>
                <input type="text" placeholder="Digite o CNPF..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="Digite o seu email..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="senha">Nome:</label>
                <input type="text" placeholder="Digite a sua senha..." ></input>
            </div>
            <div className="botao-cadastrar-cl">
                Cadastrar
            </div>
        </div>
    );
}