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
            window.location.href = "./UsersAdmin";
        } else if (buttonId === 'Produtos') {
            this.setState((prevState) => ({
                showProdutos: !prevState.showProdutos,
                showUtilizadores: false,
            }));
        } else if (buttonId === 'adicionar') {
            window.location.href = "./Adicionar";
        }
        else if (buttonId === 'listaartigos') {
            window.location.href = "./ArtigosAdmin";}
    }

    render() {
        return (
            <div>
                <Header />
                <div className="botoes-admin">
                    <button id="Utilizadores" onClick={this.handleButtonClick} className="admin-button">Utilizadores</button>
                    <button className="admin-button" id="listaartigos" onClick={this.handleButtonClick}>Lista Artigos</button>
                    <button className="admin-button" id="adicionar" onClick={this.handleButtonClick}>Adicionar Artigos</button>
                </div>
             
            </div>
        );
    }
}

export default Admin;
