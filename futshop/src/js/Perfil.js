import React, { Component } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faSave } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de salvar
import '../css/Perfil.css';

const url = "https://futshop2024.azurewebsites.net"
class Perfil extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      user: {
        nome: '',
        morada: '',
        dataNascFormatted: '',
        telemovel: '',
        email: '',
        password: '',
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
          password: result.password,
          pais: result.pais,
          cidade: result.cidade,
          codigopostal: result.codigopostal,
          telemovel: result.telemovel,
          dataNascFormatted: result.dataNascFormatted
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

  handleButtonClick = (e) => {
    const buttonId = e.currentTarget.id;
    if (buttonId === 'logout') {
      localStorage.removeItem('isUserLoggedIn');
      localStorage.removeItem('userId');
      localStorage.removeItem('isUserAdmin');
      window.location.href = '/';
    }
  };

  handleSaveChanges = () => {
    // Lógica para salvar as alterações aqui
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword
    }));
  };

  render() {
    const { user, showPassword } = this.state;

    return (
      <div>
        <Header />
        <div className="profile-container">
          <div className="profile-info">
            <div className="profile-info-item">
              <label>Nome:</label>
              <input type="text" name="name" value={user.nome} onChange={this.handleChange} />
            </div>
            <div className="profile-info-item">
              <label>Email:</label>
              <input type="email" name="email" value={user.email} onChange={this.handleChange} />
            </div>
            <div className="profile-info-item">
              <label>Morada:</label>
              <input type="text" name="morada" value={user.morada} onChange={this.handleChange} />
            </div>
            <div className="profile-info-item">
              <label>Telemovel:</label>
              <input type="text" name="telemovel" value={user.telemovel} onChange={this.handleChange} />
            </div>
            <div className="profile-info-item">
              <label>Cidade:</label>
              <input type="text" name="cidade" value={user.cidade} onChange={this.handleChange} />
            </div>
            <div className="profile-info-item">
              <label>Pais:</label>
              <input type="text" name="pais" value={user.pais} onChange={this.handleChange} />
            </div>
            <div className="profile-info-item">
              <label>Codigo Postal:</label>
              <input type="text" name="codigopostal" value={user.codigopostal} onChange={this.handleChange} />
            </div>
            <div className="profile-info-item">
              <label>Data de Nascimento:</label>
              <input type="text" name="dataNascFormatted" value={user.dataNascFormatted} onChange={this.handleChange} />
            </div>
            <div className="profile-info-item">
              <label>Password:</label>
              <div className="password-input">
                <input type={showPassword ? "text" : "password"} name="password" value={user.password} onChange={this.handleChange} />
                <button type="button" onClick={this.togglePasswordVisibility}>
                  {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="save-button" onClick={this.handleSaveChanges}>
          <FontAwesomeIcon icon={faSave} /> Guardar Alterações
        </button>
        <button className="logout" id="logout" onClick={this.handleButtonClick}>Log out</button>
      </div>
    );
  }
}

export default Perfil;
