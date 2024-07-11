import React, { Component, useState } from "react";
import axios from 'axios';
import '../css/Login.css';
import Header from './Header';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        loginEmail: '',
        loginPassword: '',
        registerName: '',
        registerEmail: '',
        registerPassword: '',
        message: ''
    };
    handleInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleLogin = async () => {
        const { loginEmail, loginPassword } = this.state;
        try {
            const response = await axios.post('https://localhost:7090/api/login', {
                email: loginEmail,
                password: loginPassword
            });
            this.setState({ message: response.data }); // assuming the API returns a string message
        } catch (error) {
            this.setState({ message: error.response.data }); // handle error response from API
        }
    };

    handleRegister = async () => {
        const { registerName, registerEmail, registerPassword } = this.state;
        const data = {
            Nome: registerName,
            Email: registerEmail,
            Password: registerPassword
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

    componentDidMount() {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
        const irritaBtn = document.getElementById('botaoqueirrita');

        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });

        irritaBtn.addEventListener('click', () => {
            console.log("Botão irrita clicado!");
            // Atualiza o estado de login no localStorage
            localStorage.setItem('isUserLoggedIn', 'true');
            // Redireciona para a página principal
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container" id="container">
                    <div className="form-container sign-up">
                        <form>
                            <h1>Criar Conta</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fab fa-github"></i></a>
                                <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>ou usa o teu email para registo</span>
                            <input
                                type="text"
                                placeholder="Nome"
                                name="registerName"
                                value={this.state.registerName}
                                onChange={(evt) => this.handleInputChange(evt)}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="registerEmail"
                                value={this.state.registerEmail}
                                onChange={(evt) => this.handleInputChange(evt)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="registerPassword"
                                value={this.state.registerPassword}
                                onChange={(evt) => this.handleInputChange(evt)}
                            />
                            <button type="button" onClick={this.handleRegister}>Registar</button>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form>
                            <h1>Login</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fab fa-github"></i></a>
                                <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>ou usa o teu email e password</span>
                            <input
                                type="email"
                                placeholder="Email"
                                name="loginEmail"
                                value={this.state.loginEmail}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="loginPassword"
                                value={this.state.loginPassword}
                                onChange={this.handleInputChange}
                            />
                            <a href="#">Esqueceste-te da Password</a>
                            <button type="button" id="botaoqueirrita" onClick={this.handleLogin}>Login</button>
                            <p>{this.state.message}</p>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Bem-vindo de Volta!</h1>
                                <p>Disponibiliza as tuas informções pessoais para usar todas as funções do site</p>
                                <button className="hidden" id="login">Login</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Olá, Amigo!</h1>
                                <p>Regista-te com as tuas informações pessoais para usares todas as funções do site</p>
                                <button className="hidden" id="register">Registar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
