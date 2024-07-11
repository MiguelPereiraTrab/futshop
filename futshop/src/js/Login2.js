import React, { Component } from 'react';
import '../css/Login2.css';
import Header from './Header';

class Login2 extends Component {
  handleRegister = () => {
    window.location.href = "/Registar";
  };

  render() {
    return (
      <div className="login-page">
        <Header />
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <div className="login-input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="login-input-group">
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="login-button-group">
              <button type="button">Login</button>
              <button type="button" onClick={this.handleRegister}>Criar Conta</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login2;
