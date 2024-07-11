import React, { Component } from 'react';
import '../css/Registar.css';
import Header from './Header';

class Registar extends Component {

  constructor(props) {
    super(props);
}
state = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerDataNascimento: '', 
    registerMorada: '',
    registerCodigoPostal: '',
    registerCidade: '',
    registerPais: '',
    registerTelemovel: '',
    message: ''
};
handleInputChange(event){
    this.setState({
        [event.target.name]: event.target.value
    });
};

handleRegister = async () => {
    const { registerName, registerEmail, registerPassword, registerDataNascimento, registerMorada, registerCodigoPostal, registerCidade, registerPais, registerTelemovel  } = this.state;
    const data = {
      Utilizador: {
        Nome: registerName,
        Email: registerEmail,
        Password: registerPassword,
        DataNascFormatted: registerDataNascimento,
        Morada: registerMorada,
        CodigoPostal: registerCodigoPostal,
        Cidade: registerCidade,
        Pais: registerPais,
        Telemovel: registerTelemovel
      },
      Dataformatada: registerDataNascimento
    };
    await fetch(`https://localhost:7090/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
        if(response.status === 200){
          window.location.href = "/";
        }
        response.json()})
        .catch(error => {
          // Handle any errors
          console.error(error);
        });



};
  render() {
    return (
      <div className="registar-page">
        <Header />
        <div className="main-content">
          <div className="registar-container">
            <h2>Criar Conta</h2>
          
              <div className="registar-input-group">
                <label htmlFor="register-name">Nome:</label>
                <input type="text" id="register-name" name="registerName" value={this.state.registerName} onChange={(evt) => this.handleInputChange(evt)} required />
              </div>
              <div className="registar-input-group">
                <label htmlFor="register-email">Email:</label>
                <input type="text" id="register-email" name="registerEmail" value={this.state.registerEmail} onChange={(evt) => this.handleInputChange(evt)} required />
              </div>
              <div className="registar-input-group">
                <label htmlFor="register-password">Password:</label>
                <input type="password" id="register-password" name="registerPassword" value={this.state.registerPassword} onChange={(evt) => this.handleInputChange(evt)} required />
              </div>
              <div className="registar-input-group">
                <label htmlFor="register-DataNascimento">Data de Nascimento:</label>
                <input type="text" id="register-datanascimento" name="registerDataNascimento" value={this.state.registerDataNascimento} onChange={(evt) => this.handleInputChange(evt)} required />
              </div>
              <div className="registar-input-group">
                <label htmlFor="register-morada">Morada:</label>
                <input type="text" id="register-morada" name="registerMorada" value={this.state.registerMorada} onChange={(evt) => this.handleInputChange(evt)} required />
              </div>
              <div className="registar-input-group">
                <label htmlFor="register-codigopostal">Código Postal:</label>
                <input type="text" id="register-codidopostal" name="registerCodigoPostal" value={this.state.registerCodigoPostal} onChange={(evt) => this.handleInputChange(evt)} required />
              </div>
              <div className="registar-input-group">
                <label htmlFor="register-cidade">Cidade:</label>
                <input type="text" id="register-cidade" name="registerCidade" value={this.state.registerCidade} onChange={(evt) => this.handleInputChange(evt)} required />
              </div>
              <div className="registar-input-group">
                <label htmlFor="register-pais">País:</label>
                <input type="text" id="register-pais" name="registerPais" value={this.state.registerPais} onChange={(evt) => this.handleInputChange(evt)} required />
              </div>
              <div className="registar-input-group">
                <label htmlFor="register-telemovel">Telemovel:</label>
                <input type="text" id="register-telemovel" name="registerTelemovel" value={this.state.registerTelemovel} onChange={(evt) => this.handleInputChange(evt)} required />
              </div>
              <div className="registar-button-group">
                <button type="submit" onClick={this.handleRegister}>Registrar</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registar;
