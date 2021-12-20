import React, { useState } from 'react';
import NavBarClientes from '../componentes/NavBarClientes';
import './hmclientes-styles.css';

export default function HomePageClientes(){

    const [veiculosNaoReservados, setVeiculosNaoReservados] = useState([]);

    return (
        <div className='container-homec'>
            <NavBarClientes></NavBarClientes>
            <div className='content-homec'>
                <div className='cardveiculo-cliente' onClick={null}>
                    <img src={"http://www.locacaodeveiculos.com.br/wp-content/themes/locacaodeveiculos/assets/images/carro.png"} className='imagem-veic' alt='imagem-veic'></img>
                    <div className='label-veic'>veiculo.nome</div>
                    <div className='label-veic'>veiculo.marca</div>
                    <div className='label-veic'>veiculo.placa</div>
                </div>
            </div>
        </div>
    );
}