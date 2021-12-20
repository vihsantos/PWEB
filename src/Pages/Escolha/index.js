import "./escolha-styles.css"
import { Link } from "react-router-dom"

export default function Escolha(){
    return(
        <div className="container-escolha">
            <div className="content-escolha">

                <Link to={`/homec`} >
                            <div className="botao-escolha">
                                Home Page Cliente
                            </div>
                </Link>
                <Link to={`/homef`} >
                            <div className="botao-escolha">
                                Home Page Funcionario
                            </div>
                </Link>
                    

            </div>
        </div>
    )
}