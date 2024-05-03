import '../css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import React, { Component } from 'react';
import Login from './Login';
import HomePage from './HomePage';
import Betclic from '../Ligas/Betclic';
import Laliga from '../Ligas/Laliga';
import Bundesliga from '../Ligas/Bundesliga';
import Ligue1 from '../Ligas/Ligue1';
import PremierLeague from '../Ligas/PremierLeague';
import SerieA from '../Ligas/SerieA';
import Selecoes from '../Retro/Selecoes';
import BetclicRetro from '../Retro/BetclicRetro';
import LaligaRetro from '../Retro/LaligaRetro';
import PremierLeagueRetro from '../Retro/PremierLeagueRetro';
import Ligue1Retro from '../Retro/Ligue1Retro';
import SerieARetro from '../Retro/SerieARetro';
import BundesligaRetro from '../Retro/BundesligaRetro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router> 
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/HomePage" exact component={<HomePage />} />
            <Route path="/Ligas/Betclic" element={<Betclic />} />
            <Route path="/Ligas/Laliga" element={<Laliga />} />
            <Route path="/Ligas/Bundesliga" element={<Bundesliga />} />
            <Route path="/Ligas/Ligue1" element={<Ligue1 />} />
            <Route path="/Ligas/PremierLeague" element={<PremierLeague />} />
            <Route path="/Ligas/SerieA" element={<SerieA />} />
            <Route path="/Retro/Selecoes" element={<Selecoes />} />
            <Route path="/Retro/BetclicRetro" element={<BetclicRetro />} />
            <Route path="/Retro/LaligaRetro" element={<LaligaRetro />} />
            <Route path="/Retro/BundesligaRetro" element={<BundesligaRetro />} />
            <Route path="/Retro/Ligue1Retro" element={<Ligue1Retro />} />
            <Route path="/Retro/PremierLeagueRetro" element={<PremierLeagueRetro />} />
            <Route path="/Retro/SerieARetro" element={<SerieARetro />} />

          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
