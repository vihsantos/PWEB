import './fun-styles.css';
import Person from "/pweb/src/assets/person.png"
import NavBarFuncionarios from '../componentes/NavBarFuncionarios';
import IconAdd from "/pweb/src/assets/icon-add.png"
import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getFuncionarios } from '../../configuracoes/Firebase';


export default function Funcionarios(){


const [dfuncionarios, setDfuncionarios] = useState([])

useEffect(()=>{

    getFuncionarios().then(funcionarios => {
        setDfuncionarios(
            funcionarios.map((f)=>{
                return {
                    id: f.id,
                    nome: f.nome,
                    privacessos: f.privacessos
                }
            })
        )
    })

    }, [])


    
    // getFuncionarios().then(funcionarios => {
    //     funcionarios.forEach(f => {
    //         dfuncionarios.push(
    //             {
    //                 id: f.id,
    //                 nome: f.nome,
    //                 privacessos: f.privacessos
    //             }
    //         )
    //     });
    // })

    return (
        <div className='container-fun'>
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className='content-fun'>
                {
                    dfuncionarios.map((funcionario)=>{
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




// id: doc.id,
//                 nome: doc.data().nome,
//                 privacessos: doc.data().privacessos