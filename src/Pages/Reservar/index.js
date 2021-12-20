import { useState } from "react";
import { editarReservaVeiculo, reservar } from "../../configuracoes/Firebase";
import "./reservar-styles.css"
export default function Reservar(){

    const [nomecliente, setNomecliente] = useState('')
    const [nomeveiculo, setNomeveiculo] = useState('')
    const [periodolocacao, setPeriodolocacao] = useState(0)
    const [tiposeguro, setTiposeguro] = useState('')


    const aoClickReservar = async () => {
        await  reservar(nomecliente, nomeveiculo, periodolocacao, tiposeguro);
        await  editarReservaVeiculo(nomeveiculo)
    }

    return(
    <div className="container-reservar">
         <div className="titulo">
                RESERVAR
            </div>
            <div className="text-field">
                <label htmlFor="nomecliente">Nome Cliente:</label>
                <input type="text" id="cliente" placeholder="Digite o seu nome" onChange={(event)=>{setNomecliente(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="nomeveiculo">Nome Veiculo:</label>
                <input type="text" id="nomeveiculo" placeholder="Digite o nome do veiculo que escolheu" onChange={(event)=>{setNomeveiculo(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="periodolocacao">Periodo de locação:</label>
                <input type="number" id="periodolocacao" placeholder="Digite o periodo de locação" onChange={(event)=>{setPeriodolocacao(event.target.value)}}></input>
            </div>
            <div className="text-field">
                <label htmlFor="tiposeguro">Tipo de seguro:</label>
                <input type="text" id="tiposeguro" placeholder="Informe o tipo de seguro escolhido" onChange={(event)=>{setTiposeguro(event.target.value)}}></input>
            </div>
            <button className="botao-cadastrar-cl" onClick={()=> aoClickReservar}>
                Cadastrar
            </button>

    </div>
    )
}