import "../css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Login2 from "./Login2";
import HomePage from "../homePage/HomePage";
import Desenvolvedores from "./Desenvolvedores";
import Perfil from "./Perfil";
import Admin from "./Admin";
import Compra from "./Compra";
import Ligas from "../Ligas/Ligas";
import LigasHomePage from "../Ligas/LigasHomePage";
import Registar from "./Registar";
import Artigo from "./Artigo";
import Retro from "../Retro/Retro";
import RetroHomePage from "../Retro/RetroHomePage";
import Selecoes from "../Selecoes/Selecoes";
import SelecoesHomePage from "../Selecoes/SelecoesHomePage";
import Adicionar from "./Adicionar";
import Carrinho from "./Carrinho";
import {
    imageListBetclic,
    imageListLaliga,
    imageListPremierLeague,
} from "../Ligas/listaImagens";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/Desenvolvedores" element={<Desenvolvedores />} />
                        <Route path="/Perfil" element={<Perfil />} />
                        <Route path="/Admin" element={<Admin />} />
                        <Route path="/Compra" element={<Compra />} />
                        <Route path="/Login2" element={<Login2 />} />
                        <Route path="/Registar" element={<Registar />} />
                        <Route path="/Artigo" element={<Artigo />} />
                        <Route path="/Adicionar" element={<Adicionar />} />
                        <Route path="/Carrinho" element={<Carrinho />} />


                        <Route path="/Ligas" element={<LigasHomePage />} />
                        <Route path="/Ligas/Betclic" element={<Ligas imageList={imageListBetclic} />} />
                        <Route path="/Ligas/Laliga" element={<Ligas imageList={imageListLaliga} />} />
                        <Route path="/Ligas/PremierLeague" element={<Ligas imageList={imageListPremierLeague} />} />


                        <Route path="/Retro" element={<RetroHomePage />} />


                        <Route path="/Selecoes" element={<SelecoesHomePage />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;
