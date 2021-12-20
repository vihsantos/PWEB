import "./fornecedores-styles.css";
import NavBarFuncionarios from '../componentes/NavBarFuncionarios';
import IconAdd from "/pweb/src/assets/icon-add.png"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { getFornecedores } from "../../configuracoes/Firebase";



export default function Fornecedores(){
    
     const [fornecedores, setFornecedores] = useState([]);

    useEffect(()=>{

        getFornecedores().then(fornecedores => {
            setFornecedores(
                fornecedores.map((f)=>{
                    return {
                        id: f.id,
                        nome: f.nome,
                        cnpj: f.cnpj,
                        prodoferecidos: f.prodoferecidos,
                        endereco: f.endereco,
                        contatoempresa: f.contatoempresa,
                    }
                })
            )
        })

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


