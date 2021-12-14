import './cv-styles.css';

export default function CadVeiculos(){
    return (
        <div className='container-cadv'>
           <div className="titulo">
                CADASTRAR VEICULOS
            </div>
            <div className="text-field">
                <label htmlFor="nome">Nome do veiculo:</label>
                <input type="text" placeholder="Digite o nome do veiculo..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="marca">Marca:</label>
                <input type="text" placeholder="Digite a marca do veiculo..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="placa">Placa:</label>
                <input type="text" placeholder="Digite a placa do veiculo..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="chassi">Chassi:</label>
                <input type="text" placeholder="Digite o chassi do veiculo..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="renovam">Renovam:</label>
                <input type="text" placeholder="Digite o renovam do veiculo..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="cadeiras">Cadeiras:</label>
                <input type="text" placeholder="Insira a quantidade de cadeiras..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="classificacao">Classificação:</label>
                <input type="text" placeholder="Insira a classificação do veiculo..." ></input>
            </div>
            <div className="text-field">
                <label htmlFor="cor">Cor:</label>
                <input type="text" placeholder="Insira a cor do veiculo..." ></input>
            </div>
            <div className="botao-cadastrar-cl">
                Cadastrar
            </div>
        </div>
    );
}