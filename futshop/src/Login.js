import React, { Component } from 'react';
import Header from './Header';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      password: ''
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

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { isLoggedIn, username, password } = this.state;
    return (
      <div>
        <Header isLoginPage={true} />
      
        {isLoggedIn ? (
          <div>
            <h1>Bem-vindo à sua página inicial</h1>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <form onSubmit={this.handleLogin}>
              <label htmlFor="username">Nome de Utilizador:</label>
              <input type="text" id="username" value={username} onChange={this.handleChange} required />
              <br />
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" value={password} onChange={this.handleChange} required />
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
