
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = (e) => {
    e.preventDefault(); // previne o recarregamento da página
    // Aqui você pode adicionar a lógica de autenticação
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    // Lógica de logout
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <h1>Bem-vindo à sua página inicial</h1>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <p>Entre em contato conosco!</p>
            <form onSubmit={this.handleLogin}>
              <label htmlFor="username">Nome de Utilizador:</label>
              <input type="text" id="username" required />
              <br />
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" required />
              <br />
              <button type="submit">Entrar</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;