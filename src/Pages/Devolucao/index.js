import "./devolucao-styles.css";
import NavBarClientes from "../componentes/NavBarClientes"

export default function Devolucao(){

    const reservafDevolucao = true;

    return (
        <div className="container-devolucao">
            <NavBarClientes></NavBarClientes>
            <div className="content-devo">
                {
                    reservafDevolucao ?
                    <div className="checklist-devolucao">
                        <div className="titulo-ck">Checklist Entrega</div>
                        <div className="check-box-devo">
                            <label htmlFor="atraso" >Houve atraso?</label>
                            <input type="checkbox" className="input-check"></input>
                        </div>
                        <div className="check-box-devo">
                            <label htmlFor="atraso" >Contém dano?</label>
                            <input type="checkbox" className="input-check"></input>
                        </div>
                        <div className="check-box-devo">
                            <label htmlFor="atraso" >Está limpo?</label>
                            <input type="checkbox" className="input-check"></input>
                        </div>
                        <button className="botao-enviar">
                            Enviar
                        </button>
                    </div>
                    : <div className="devo-vazio">
                        Não existe reserva a ser devolvida!
                    </div>
                }
            </div>
        </div>
    )
}