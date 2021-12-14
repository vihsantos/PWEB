import "./hm_funcionarios.css";
import NavBarFuncionarios from "../componentes/NavBarFuncionarios"

export default function HomePageFuncionarios(){
    return(
        <div className="container-hmfuncionarios">
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className="content-hmf">
                <div className="quant-veiculos">
                    <div className="valor">36</div>
                    <div className="subtitulo-valor">Veiculos Reservados</div>
                </div>
                <div className="chart">
                    
                </div>
            </div>
        </div>
        
    )
}