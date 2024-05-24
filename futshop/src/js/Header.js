import React, { Component } from "react";
import '../css/Header.css';

class Header extends Component {
    handleButtonClick = (e) => {
        const buttonId = e.target.id;
        if (buttonId === 'Registar') {
            window.location.href = '/Registar';
        } else if (buttonId === 'Login') {
            window.location.href = '/Login';
        }
    };

    render() {
        // Verifica se está na página de login
        const isLoginPage = this.props.isLoginPage;

        return(
            <div className="header">
                <div className="header__left">
                    <a href="/">
                    <img className="logo" src="../images/logofutshop.jpeg" alt="" /></a>
                    <a href="/">
                        <h2 >FutShop</h2>
                    </a>
                   
                </div>
                <div className="header__center">
                    <ul className="header__lists">
                        <button><a href="/" className="noUnderline">Home</a></button>
                        <div className="header__centerMenu">
                            <button>Ligas</button>
                            <div className="dropDown__header">
                                <a href="../Ligas/Betclic">Liga Betclic</a>
                                <a href="../Ligas/Laliga">LaLiga</a>
                                <a href="../Ligas/PremierLeague">Premier League</a>
                                <a href="../Ligas/Bundesliga">Bundesliga</a>
                                <a href="../Ligas/Ligue1">Ligue 1</a>
                                <a href="../Ligas/SerieA">Serie A</a>
                            </div>
                        </div>
                        <div className="header__centerMenu">
                            <button>Retro</button>
                            <div className="dropDown__header">
                                <a href="../Retro/Selecoes">Seleções</a>
                                <a href="../Retro/BetclicRetro">Liga Betclic</a>
                                <a href="../Retro/LaligaRetro">LaLiga</a>
                                <a href="../Retro/PremierLeagueRetro">Premier League</a>
                                <a href="../Retro/BundesligaRetro">Bundesliga</a>
                                <a href="../Retro/Ligue1Retro">Ligue 1</a>
                                <a href="../Retro/SerieARetro">Serie A</a>
                            </div>
                        </div>
                        <div className="header__centerMenu">
                            <button>Seleções</button>
                            <div className="dropDown__header">
                                <a href="../Selecoes/Europa">Europa</a>
                                <a href="../Selecoes/Africa">África</a>
                                <a href="../Selecoes/AmericaSul">América do Sul</a>
                                <a href="../Selecoes/AmericaNorte">América do Norte</a>
                                <a href="../Selecoes/Asia">Ásia</a>
                            </div>
                       </div>
                        <button><a href="./Desenvolvedores" className="noUnderline">Desenvolvedores</a></button>
                    </ul>
                </div>
                <div className="header__right">

                    {!isLoginPage && <button id="Login" onClick={this.handleButtonClick}>Login</button>}
                </div>
            </div>
        );
    }
}

export default Header;
