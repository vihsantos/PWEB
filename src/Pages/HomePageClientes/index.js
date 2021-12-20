import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getVeiculosNReser } from '../../configuracoes/Firebase';
import NavBarClientes from '../componentes/NavBarClientes';
import './hmclientes-styles.css';

export default function HomePageClientes(){

    const [veiculosNaoReservados, setVeiculosNaoReservados] = useState([]);

    useEffect(()=>{

        getVeiculosNReser().then(reservasf => {
            setVeiculosNaoReservados(
                reservasf.map((vnr)=>{
                    return {
                        id: vnr.id,
                        nome: vnr.nome,
                        imagem: vnr.imagem,
                        cadeiras: vnr.cadeiras,
                        reservado: vnr.reservado,
                        marca: vnr.marca,
                    }
                })
            )
        })
      
    }, [])

    return (
        <div className='container-homec'>
            <NavBarClientes></NavBarClientes>
            <div className='content-homec'>
                <div className='titulo-homec'>Veiculos disponiveis para reserva:</div>
                <div className='cards-homec'>
                {
                    veiculosNaoReservados.map((veiculo)=>{
                        return(
                                <div className='cardveiculo-cliente' >
                                <img src={veiculo.imagem} className='imagem-veic' alt='imagem-veic'></img>
                                <div className='label-veic'>{veiculo.nome}</div>
                                <div className='label-veic'>{veiculo.marca}</div>
                                <div className='label-veic'>{veiculo.cadeiras} Cadeiras</div>
                                </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
}