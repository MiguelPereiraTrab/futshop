import React, { useState } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../css/Compra.css';

const Compra = () => {
  const [user, setUser] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFinalizePurchase = () => {
    // Lógica para finalizar a compra
    console.log('Compra finalizada com sucesso!', user);
  };

  return (
    <div>
      <Header />
      <div className="compra-container">
        <div className="user-info">
          <h2>Detalhes do Cliente</h2>
          <div className="user-info-item">
            <label>Nome:</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
          </div>
          <div className="user-info-item">
            <label>Email:</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} />
          </div>
          <div className="user-info-item">
            <label>Morada:</label>
            <input type="text" name="address" value={user.address} onChange={handleChange} />
          </div>
          <div className="user-info-item">
            <label>Telefone:</label>
            <input type="text" name="phone" value={user.phone} onChange={handleChange} />
          </div>
        </div>

        <div className="order-summary">
          <h2>Resumo do Pedido</h2>
          <div className="order-item">
            <span>Produto 1</span>
            <span>€20.00</span>
          </div>
          <div className="order-item">
            <span>Produto 2</span>
            <span>€35.00</span>
          </div>
          <div className="order-total">
            <span>Total</span>
            <span>€55.00</span>
          </div>
        </div>

        <div className="payment-info">
          <h2>Informações de Pagamento</h2>
          <div className="payment-info-item">
            <label>Número do Cartão:</label>
            <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="payment-info-item">
            <label>Data de Validade:</label>
            <input type="text" name="expiryDate" placeholder="MM/AA" />
          </div>
          <div className="payment-info-item">
            <label>CVV:</label>
            <input type="text" name="cvv" placeholder="123" />
          </div>
        </div>

        <button className="finalize-button" onClick={handleFinalizePurchase}>
          <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Compra;
