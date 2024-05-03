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
                                <a href="#">Premier League</a>
                                <a href="#">Bundesliga</a>
                                <a href="#">Ligue 1</a>
                                <a href="#">Serie A</a>
                            </div>
                        </div>
                        <div className="header__centerMenu">
                            <button>Retro</button>
                            <div className="dropDown__header">
                                <a href="#">Seleções</a>
                                <a href="/Ligas/Betclic">Liga Betclic</a>
                                <a href="#">LaLiga</a>
                                <a href="#">Premier League</a>
                                <a href="#">Bundesliga</a>
                                <a href="#">Ligue 1</a>
                                <a href="#">Serie A</a>
                            </div>
                        </div>
                        <div className="header__centerMenu">
                            <button>Seleções</button>
                            <div className="dropDown__header">
                                <a href="#">Europa</a>
                                <a href="#">África</a>
                                <a href="#">América do Sul</a>
                                <a href="#">América do Norte</a>
                                <a href="#">Ásia</a>
                            </div>
                       </div>
                        <button><a href="/Desenvolvedores" className="noUnderline">Desenvolvedores</a></button>
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
