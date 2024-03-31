import React, { Component } from "react";
import './Header.css';

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
                    <img className="logo" src="./images/logo.jpg" alt="" /></a>
                    <a href="/">
                        <h2 >FutShop</h2>
                    </a>
                   
                </div>
                <div className="header__center">
                    <ul className="header__lists">
                        <li><a href="/">Home</a></li>
                        <div className="header__centerMenu">
                            <button>Ligas</button>
                            <div className="dropDown__header">
                                <a href="#"> Liga Portugal</a>
                                <a href="#">LaLiga</a>
                                <a href="#">Premier League</a>
                                <a href="#">Bundesliga</a>
                                <a href="#">Liga 1</a>
                                <a href="#">Séria A</a>
                            </div>
                        </div>
                        <li><a href="#">Desenvolvedores</a></li>
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
