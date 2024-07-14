import React, { Component } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../css/Compra.css';


const url = "https://futshop2024.azurewebsites.net"

class Compra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        nome: '',
        morada: '',
        telemovel: '',
        email: '',
        codigopostal: '',
        cidade:'',
        pais:''
      },
      showPassword: false
    };
  }
  async componentDidMount(){
    const userId = localStorage.getItem('userId')
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let res = await fetch('${url}/api/user/${userId}', requestOptions).catch(error => console.log('error', error));
    if (res !== undefined && res.status==200){
      let result = await res.json();
      this.setState(() => ({
        user: {
          email: result.email,
          nome: result.nome,
          morada: result.morada,
          pais: result.pais,
          cidade: result.cidade,
          codigopostal: result.codigopostal,
          telemovel: result.telemovel,
        }
      }))
      console.log(result)
    }else{
     
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  };

  handleFinalizePurchase = () => {
    // Lógica para finalizar a compra
    console.log('Compra finalizada com sucesso!', this.state.user);
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <Header />
        <div className="compra-container">
          <div className="user-info">
            <h2>Detalhes do Cliente</h2>
            <div className="user-info-item">
              <label>Nome:</label>
              <input type="text" name="nome" value={user.nome} onChange={this.handleChange} />
            </div>
            <div className="user-info-item">
              <label>Email:</label>
              <input type="email" name="email" value={user.email} onChange={this.handleChange} />
            </div>
            <div className="user-info-item">
              <label>Morada:</label>
              <input type="text" name="morada" value={user.morada} onChange={this.handleChange} />
            </div>
            <div className="user-info-item">
              <label>Cidade:</label>
              <input type="text" name="cidade" value={user.cidade} onChange={this.handleChange} />
            </div>
            <div className="user-info-item">
              <label>Pais:</label>
              <input type="text" name="pais" value={user.pais} onChange={this.handleChange} />
            </div>
            <div className="user-info-item">
              <label>Telemovel:</label>
              <input type="text" name="telemovel" value={user.telemovel} onChange={this.handleChange} />
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

          <button className="finalize-button" onClick={this.handleFinalizePurchase}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />Finalizar Compra
          </button>
        </div>
      </div>
    );
  }
}

export default Compra;
