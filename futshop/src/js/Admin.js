import React, { Component } from 'react';
import '../css/Admin.css'; // Certifique-se de que o caminho está correto
import Header from './Header';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUtilizadores: false,
            showProdutos: false,
        };
    }

    handleButtonClick = (e) => {
        const buttonId = e.target.id;
        if (buttonId === 'Utilizadores') {
            this.setState((prevState) => ({
                showUtilizadores: !prevState.showUtilizadores,
                showProdutos: false,
            }));
        } else if (buttonId === 'Produtos') {
            this.setState((prevState) => ({
                showProdutos: !prevState.showProdutos,
                showUtilizadores: false,
            }));
        } else if (buttonId === 'Inicio') {
            // Lógica para o botão Início
        }
    };

    render() {
        return (
            <div>
                <Header />
                <div className="botoes-admin">
                    <button id="Inicio" onClick={this.handleButtonClick} className="admin-button">Início</button>
                    <button id="Utilizadores" onClick={this.handleButtonClick} className="admin-button">Utilizadores</button>
                    <button id="Produtos" onClick={this.handleButtonClick} className="admin-button">Produtos</button>
                </div>
                <div className="admin-content">
                    {this.state.showUtilizadores && (
                        <div id="lista-utilizadores" className="lista-utilizadores">
                            <ul>
                                <li>Utilizador 1</li>
                                <li>Utilizador 2</li>
                                <li>Utilizador 3</li>
                            </ul>
                        </div>
                    )}
                    {this.state.showProdutos && (
                        <div id="lista-produtos" className="lista-produtos">
                            <ul>
                                <li>Produto 1</li>
                                <li>Produto 2</li>
                                <li>Produto 3</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Admin;
