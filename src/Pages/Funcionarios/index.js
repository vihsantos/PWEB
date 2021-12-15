import './fun-styles.css';
import Person from "assets/person.png"
import NavBarFuncionarios from '../componentes/NavBarFuncionarios';
import IconAdd from "assets/icon-add.png"
import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import {collection, getDocs} from "firebase/firestore";
import { db } from 'configuracoes/firebase';
import { useState } from 'react';


export default function Funcionarios(){
    const [funcionarios, setFuncionarios] = useState([]);
    const funcionariosCollectionsRef = collection(db, "funcionarios");
    useEffect(()=>{

        const getFuncionarios = async () =>{
            const data = await getDocs(funcionariosCollectionsRef);
            setFuncionarios(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
        }
        getFuncionarios()
    }, [])

    return (
        <div className='container-fun'>
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className='content-fun'>
                {
                    funcionarios.map((funcionario)=>{
                        return(
                            <div className='card-funcionarios' id={funcionario.id}>
                                <div className='circle-person'>
                                    <img className='person-img' src={Person} alt='pessoa'></img>
                                </div>
                                <div className='campos-fun'>
                                    <div className='label-fun'>Nome:</div>
                                    <div className='valor-fun'>{funcionario.nome}</div>
                                </div>
                                <div className='campos-fun'>
                                    <div className='label-fun'>Privilégios de acesso:</div>
                                    <div className='valor-fun'>{funcionario.privacessos}</div>
                                </div>
                            </div>
                        );
                    })
                }
                <div className='adicionar-funcionarios'>
                    <Link to="/cadfuncionarios">
                        <img className='add-fun' src={IconAdd} alt='add-fun'></img>
                    </Link>
                </div>
            </div>
        </div>
    );
}