import React, { useState } from 'react';
import NavBarClientes from '../componentes/NavBarClientes';
import './hmclientes-styles.css';

export default function HomePageClientes(){

    const [veiculosNaoReservados, setVeiculosNaoReservados] = useState([]);

    return (
        <div className='container-homec'>
            <NavBarClientes></NavBarClientes>
            <div className='content-homec'>
                <div className='cardveiculo-cliente'>
                    <img src={"veiculo.imagem"} className='imagem-veic' alt='imagem-veic'></img>
                    <div className='label-veic'>veiculo.nome</div>
                    <div className='label-veic'>veiculo.marca</div>
                    <div className='label-veic'>veiculo.placa</div>
                </div>
            </div>
        </div>
    );
}