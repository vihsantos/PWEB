import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import StartPage from "../Pages/StartPage";
import Login from "../Pages/Login";
import CadastrarCliente from "../Pages/CadastrarCliente";
import HomePageFuncionarios from "../Pages/HomePageFuncionarios";
import CadFuncionarios from "../Pages/CadFuncionarios";
import CadVeiculos from "../Pages/CadVeiculos";
import Reservas from "../Pages/Reservas";
import HomePageClientes from "../Pages/HomePageClientes";
import CadFornecedores from "../Pages/CadFornecedores";
import Funcionarios from "../Pages/Funcionarios"
import VeiculosF from "../Pages/VeiculosF"
import Fornecedores from "../Pages/Fornecedores";
import Devolucao from "../Pages/Devolucao"
import Reservar from "../Pages/Reservar"
import Escolha from "../Pages/Escolha"

const Rotas = () => {
   return(
           <HashRouter>
               <Routes>
                <Route element = { <StartPage/> }  path="/" exact />
                <Route element = { <CadastrarCliente/> }  path="/cadcliente" />
                <Route element = { <HomePageFuncionarios/> }  path="/homef" />
                <Route element = { <CadFornecedores/> }  path="/cadfornecedores" />
                <Route element = { <CadFuncionarios/> }  path="/cadfuncionarios" />
                <Route element = { <CadVeiculos/> }  path="/cadveiculos" />
                <Route element = { <Reservas/> }  path="/reservas" />
                <Route element = { <HomePageClientes/> }  path="/homec" />
                <Route element = { <Funcionarios/> }  path="/funcionarios" />
                <Route element = { <VeiculosF/> }  path="/veiculosf" />
                <Route element = { <Fornecedores/> }  path="/fornecedores" />
                <Route element = { <Login/> }  path="/login" />
                <Route element = { <Devolucao/> }  path="/devolucao" />
                <Route element = { <Reservar/> }  path="/reservar" />
                <Route element = { <Escolha/> }  path="/escolha" />
           </Routes>
           </HashRouter>
   )
}

export default Rotas;
