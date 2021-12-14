import "./fornecedores-styles.css";
import NavBarFuncionarios from '../componentes/NavBarFuncionarios';
import IconAdd from "/pweb/src/assets/icon-add.png"


export default function Fornecedores(){
    return (
        <div className="container-f">
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className="content-f">
                <div className="card-fornecedores">

                </div>
                <div className="add-fornecedores">
                    <img src={IconAdd} alt="add-fornecedores" className="add-forn">
                    </img>
                </div>
            </div>

        </div>
    );
}