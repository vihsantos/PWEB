import React from "react";
import { Route, BrowserRouter, HashRouter } from "react-router-dom";

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
import Reservar from "../Pages/Reservar";

const Rotas = () => {
   return(
       <HashRouter>
           <Route component = { StartPage }  path="/" exact />
           <Route component = { Login }  path="/login" />
           <Route component = { CadastrarCliente }  path="/cadcliente" />
           <Route component = { HomePageFuncionarios }  path="/homef" />
           <Route component = { CadFornecedores }  path="/cadfornecedores" />
           <Route component = { CadFuncionarios }  path="/cadfuncionarios" />
           <Route component = { CadVeiculos }  path="/cadveiculos" />
           <Route component = { Reservas }  path="/reservas" />
           <Route component = { HomePageClientes }  path="/homec" />
           <Route component = { Funcionarios }  path="/funcionarios" />
           <Route component = { VeiculosF }  path="/veiculosf" />
           <Route component = { Fornecedores }  path="/fornecedores" />
           <Route component = { Reservar }  path="/reservar"/>

       </HashRouter >
   )
}

export default Rotas;