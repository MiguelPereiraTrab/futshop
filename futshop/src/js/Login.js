// Login.js
import React, { Component } from "react";
import '../css/Login.css';
import Header from './Header';

class Login extends Component {
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
            window.location.href = "/";
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
                            <input type="text" placeholder="Nome" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Registar</button>
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
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Esqueceste-te da Password</a>
                            <button type="button" id="botaoqueirrita">Login</button>
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
