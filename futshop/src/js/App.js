import "../css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Login2 from "./Login2";
import HomePage from "../homePage/HomePage";
import Selecoes from "../Retro/Selecoes";
import BetclicRetro from "../Retro/BetclicRetro";
import LaligaRetro from "../Retro/LaligaRetro";
import PremierLeagueRetro from "../Retro/PremierLeagueRetro";
import Ligue1Retro from "../Retro/Ligue1Retro";
import SerieARetro from "../Retro/SerieARetro";
import BundesligaRetro from "../Retro/BundesligaRetro";
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
import {
    imageListBetclic,
    imageListBundesliga,
    imageListLaliga,
    imageListLigue1,
    imageListPremierLeague,
    imageListSerieA,
} from "../Ligas/listaImagens";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Desenvolvedores" element={<Desenvolvedores />} />
                        <Route path="/Ligas" element={<LigasHomePage />} />
                        <Route path="/Ligas/Betclic" element={<Ligas imageList={imageListBetclic} />} />
                        <Route path="/Ligas/Laliga" element={<Ligas imageList={imageListLaliga} />} />
                        <Route path="/Ligas/Bundesliga" element={<Ligas imageList={imageListBundesliga} />} />
                        <Route path="/Ligas/Ligue1" element={<Ligas imageList={imageListLigue1} />} />
                        <Route path="/Ligas/PremierLeague" element={<Ligas imageList={imageListPremierLeague} />} />
                        <Route path="/Ligas/SerieA" element={<Ligas imageList={imageListSerieA} />} />
                        <Route path="/Retro/Selecoes" element={<Selecoes />} />
                        <Route path="/Retro/BetclicRetro" element={<BetclicRetro />} />
                        <Route path="/Retro/LaligaRetro" element={<LaligaRetro />} />
                        <Route path="/Retro/BundesligaRetro" element={<BundesligaRetro />} />
                        <Route path="/Retro/Ligue1Retro" element={<Ligue1Retro />} />
                        <Route path="/Retro/PremierLeagueRetro" element={<PremierLeagueRetro />} />
                        <Route path="/Retro/SerieARetro" element={<SerieARetro />} />
                        <Route path="/Selecoes/Europa" element={<Europa />} />
                        <Route path="/Selecoes/Africa" element={<Africa />} />
                        <Route path="/Selecoes/AmericaSul" element={<AmericaSul />} />
                        <Route path="/Selecoes/AmericaNorte" element={<AmericaNorte />} />
                        <Route path="/Selecoes/Asia" element={<Asia />} />
                        <Route path="/Perfil" element={<Perfil />} />
                        <Route path="/Admin" element={<Admin />} />
                        <Route path="/Compra" element={<Compra />} />
                        <Route path="/Login2" element={<Login2 />} />
                        <Route path="/Registar" element={<Registar />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;
