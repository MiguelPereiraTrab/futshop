import React, { Component } from "react";
import Header from "../js/Header";
import "../css/Carrinho.css";

class Carrinho extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="lista-container">
                    {/* A lista será adicionada aqui posteriormente */}
                </div>
            </div>
        );
    }
}

export default Carrinho;
