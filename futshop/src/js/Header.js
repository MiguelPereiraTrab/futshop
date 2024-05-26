// Header.js
import React from "react";
import '../css/Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCartOpen: false // Estado para controlar se o carrinho está aberto ou fechado
        };
    }
    handleButtonClick = (e) => {
        const buttonId = e.target.id;
        if (buttonId === 'Registar') {
            window.location.href = '/Registar';
        } else if (buttonId === 'Login') {
            window.location.href = '/Login';
        }   else if (buttonId === 'Perfil'){
            window.location.href = 'Perfil';
        } else if (buttonId === 'CarrinhoCompras') {
               // Inverte o estado do carrinho ao clicar no ícone do carrinho
               this.setState(prevState => ({
                isCartOpen: !prevState.isCartOpen
            }));
        }
       
    };

    render() {
        const isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'false';

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
                        <button><a href="../Desenvolvedores" className="noUnderline">Desenvolvedores</a></button>
                    </ul>
                </div>
                <div className="header__right">
                    {isUserLoggedIn ? (
                         <button id="Login" onClick={this.handleButtonClick}>Login</button>
                    ) : (
                        <div>
                        <button id="CarrinhoCompras" onClick={this.handleButtonClick}>
                            <FaShoppingCart size={25} onClick={()=> this.handleButtonClick({target:{id: 'CarrinhoCompras'}})}/>
                        </button>
                        {this.state.isCartOpen && (
                            <div className="carrinho-dropdown">
                                <p>Conteúdo do carrinho...</p>
                                <p>Conteúdo do carrinho...</p>
                                <p>Conteúdo do carrinho...</p>
                                <p>Conteúdo do carrinho...</p>
                                <p>Conteúdo do carrinho...</p>
                                <button id="FinalizaCompra">Finalizar Compra</button>

                            </div>
                        )}
                        <button id="Perfil" onClick={this.handleButtonClick}>
                        <FaUser size={25} onClick={() => this.handleButtonClick({target: {id: 'Perfil'}})} />
                        </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Header;
