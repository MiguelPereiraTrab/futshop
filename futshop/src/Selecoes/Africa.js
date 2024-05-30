import React, { Component } from 'react';
import Header from '../js/Header'; // Importe o componente Header
import './Africa.css'; // Para estilização da página

class Africa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      quantity: 1
    };
  }

  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  }

  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  }

  handleAddToCart = () => {
    const { size, quantity } = this.state;
    console.log(`Added ${quantity} t-shirt(s) of size ${size} to cart.`);
    // Aqui você pode adicionar a lógica para adicionar o item ao carrinho
  }

  render() {
    const { size, quantity } = this.state;

    return (
      <div>
        <Header /> {/* Adicione o componente Header aqui */}
        <div className="product-page">
          <div className="product-image">
            <img src="../images/benfas.jpg" alt="T-shirt de futebol" />
          </div>
          <div className="product-details">
            <h1>T-shirt de Futebol</h1>
            <p>Descrição do produto vai aqui. É uma t-shirt de alta qualidade, perfeita para fãs de futebol.</p>
            <div className="product-price">
              <p>Preço: R$ 99,99</p>
            </div>
            <div className="product-options">
              <label htmlFor="size">Tamanho:</label>
              <select id="size" value={size} onChange={this.handleSizeChange}>
                <option value="">Selecionar</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="product-quantity">
              <label htmlFor="quantity">Quantidade:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={this.handleQuantityChange}
              />
            </div>
            <button onClick={this.handleAddToCart}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Africa;
