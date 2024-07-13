import React, { Component } from 'react';
import '../css/Login2.css';
import Header from './Header';

class Login2 extends Component {
  handleRegister = () => {
    window.location.href = "/Registar";
  };

  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = async () => {
    const { loginEmail, loginPassword } = this.state;
    const data = {
      Email: loginEmail,
      Password: loginPassword
    };

    try {
      const response = await fetch('https://localhost:7090/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.status === 200) {
        const result = await response.text(); 
          window.location.href = "/";
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('userId' , result);

      } else {
        const errorText = await response.text();
        const errorJson = await response.json();
        console.error('Login error: ', errorText);
        alert('Login failed: ' + JSON.stringify(errorJson));
      }
    } catch (error) {
      console.error('Network error: ', error);
      alert('Network error occurred');
    }
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
              <input type="text" id="login-email" name="loginEmail" value={this.state.loginEmail} onChange={this.handleInputChange} required />
            </div>
            <div className="login-input-group">
              <label htmlFor="password">Senha:</label>
              <input type="password" id="login-password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleInputChange} required />
            </div>
            <div className="login-button-group">
              <button type="button" onClick={this.handleLogin}>Login</button>
              <button type="button" onClick={this.handleRegister}>Criar Conta</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login2;
