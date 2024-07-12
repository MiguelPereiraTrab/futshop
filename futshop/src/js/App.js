import "../css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Login2 from "./Login2";
import HomePage from "../homePage/HomePage";
import Europa from "../Selecoes/Europa";
import Africa from "../Selecoes/Africa";
import AmericaSul from "../Selecoes/AmericaSul";
import AmericaNorte from "../Selecoes/AmericaNorte";
import Asia from "../Selecoes/Asia";
import Desenvolvedores from "./Desenvolvedores";
import Perfil from "./Perfil";
import Admin from "./Admin";
import Compra from "./Compra";
import Ligas from "../Ligas/Ligas";
import LigasHomePage from "../Ligas/LigasHomePage";
import Registar from "./Registar";
import Retro from "../Retro/Retro";
import RetroHomePage from "../Retro/RetroHomePage";

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

                        <Route path="/Ligas" element={<LigasHomePage />} />
                        <Route path="/Ligas/Betclic" element={<Ligas imageList={imageListBetclic} />} />
                        <Route path="/Ligas/Laliga" element={<Ligas imageList={imageListLaliga} />} />
                        <Route path="/Ligas/PremierLeague" element={<Ligas imageList={imageListPremierLeague} />} />


                        <Route path="/Retro" element={<RetroHomePage />} />


                        <Route path="/Selecoes/Europa" element={<Europa />} />
                        <Route path="/Selecoes/Africa" element={<Africa />} />
                        <Route path="/Selecoes/AmericaSul" element={<AmericaSul />} />
                        <Route path="/Selecoes/AmericaNorte" element={<AmericaNorte />} />
                        <Route path="/Selecoes/Asia" element={<Asia />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;
