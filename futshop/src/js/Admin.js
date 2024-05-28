import React, { Component } from 'react';
import '../css/Admin.css';
import Header from './Header';

class Admin extends Component {
    handleButtonClick = (e) => {
        const buttonId = e.target.id;
        if (buttonId === 'Utilizadores') {
            // Lógica para o botão Utilizadores
        } else if (buttonId === 'Produtos') {
            // Lógica para o botão Produtos
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
            </div>
        );
    }
}

export default Admin;
