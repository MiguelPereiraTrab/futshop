// Header.js
import React from "react";
import "../css/Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartOpen: false, // Estado para controlar se o carrinho está aberto ou fechado
        };
    }

    handleButtonClick = (e) => {
        const buttonId = e.currentTarget.id;
        if (buttonId === "Registar") {
            window.location.href = "/Registar";
        } else if (buttonId === "Login") {
            window.location.href = "/Login2";
        } else if (buttonId === "Perfil") {
            window.location.href = "/Perfil";
        } else if (buttonId === "CarrinhoCompras") {
            this.setState((prevState) => ({
                isCartOpen: !prevState.isCartOpen,
            }));
        } else if (buttonId === "FinalizaCompra") {
            window.location.href = "/Compra";
        }
    };

    render() {
        const isUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "false";

        return (
            <div className="header">
                <div className="header__left">
                    <a href="/">
                        <img className="logo" src="../images/logofutshop.jpeg" alt="Logo" />
                    </a>
                    <a href="/">
                        <h2>FutShop</h2>
                    </a>
                </div>
                <div className="header__center">
                    <ul className="header__lists">
                        <button>
                            <a href="/" className="noUnderline">
                                Home
                            </a>
                        </button>
                        <div className="header__centerMenu">
                            <a href="/Ligas" className="noUnderline">
                                Ligas
                            </a>
                        </div>
                        <div className="header__centerMenu">
                            <a href="/Retro" className="noUnderline">
                                Retro
                            </a>
                        </div>
                        <div className="header__centerMenu">
                            <a href="/Selecoes" className="noUnderline">
                                Selecoes
                            </a>
                        </div>
                        <button>
                            <a href="../Desenvolvedores" className="noUnderline">
                                Desenvolvedores
                            </a>
                        </button>
                        <button>
                            <a href="../Admin" className="noUnderline">Admin</a>
                        </button>
                    </ul>
                </div>
                <div className="header__right">
                    {isUserLoggedIn ? (  
                        
                    
                        <button id="Login" onClick={this.handleButtonClick}>
                            <FaUser size={25} /> Login
                        </button>
                        ) : (
                        <div>
                            <button id="CarrinhoCompras" onClick={this.handleButtonClick}>
                                <FaShoppingCart size={25} />
                            </button>
                            {this.state.isCartOpen && (
                                <div className="carrinho-dropdown">
                                    <p>Conteúdo do carrinho...</p>
                                    <p>Conteúdo do carrinho...</p>
                                    <p>Conteúdo do carrinho...</p>
                                    <p>Conteúdo do carrinho...</p>
                                    <p>Conteúdo do carrinho...</p>
                                    <button id="FinalizaCompra" onClick={this.handleButtonClick}>
                                        Finalizar Compra
                                    </button>
                                </div>
                            )}
                            <button id="Perfil" onClick={this.handleButtonClick}>
                                <FaUser size={25} />
                            </button>
                        </div>       
                    )}
                </div>
            </div>
        );
    }
}

export default Header;
