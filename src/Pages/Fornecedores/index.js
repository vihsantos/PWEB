import "./fornecedores-styles.css";
import NavBarFuncionarios from '../componentes/NavBarFuncionarios';
import IconAdd from "assets/icon-add.png"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "configuracoes/firebase";



export default function Fornecedores(){
    const [fornecedores, setFornecedores] = useState([]);
    const fornecedoresCollectionsRef = collection(db, "fornecedor");
    
    useEffect(()=>{

        const getFornecedores = async () =>{
            const data = await getDocs(fornecedoresCollectionsRef);
            setFornecedores(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
            console.log(data);
        }
        getFornecedores()
    }, [])

    return (
        <div className="container-f">
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className="content-f">
            {
                    fornecedores.map((fornecedor)=>{
                        return(
                            <div className="card-fornecedores">
                                    <div className="titulo-card-fornecedor">
                                        {fornecedor.nome}
                                    </div>
                                <div className="campo-fornecedores">
                                    <div className="label-fornecedores">
                                        CNPJ:
                                    </div>
                                    <div className="valor-fornecedores">
                                        {fornecedor.cnpj}
                                    </div>
                                </div>
                                <div className="campo-fornecedores">
                                    <div className="label-fornecedores">
                                        Produtos Oferecidos:
                                    </div>
                                    <div className="valor-fornecedores">
                                        {fornecedor.prodoferecidos}
                                    </div>
                                </div>
                                <div className="campo-fornecedores">
                                    <div className="label-fornecedores">
                                        Endereço:
                                    </div>
                                    <div className="valor-fornecedores">
                                        {fornecedor.endereço}
                                    </div>
                                </div>
                                <div className="campo-fornecedores">
                                    <div className="label-fornecedores">
                                        Contato:
                                    </div>
                                    <div className="valor-fornecedores">
                                        {fornecedor.contatoempresa}
                                    </div>
                                </div>
                            </div> 
                        );
                    })
                }
                <div className="add-fornecedores">
                    <Link to="/cadfornecedores">
                        <img src={IconAdd} alt="add-fornecedores" className="add-forn">
                        </img>
                    </Link>
                </div>
            </div>
        </div>
    );
}


