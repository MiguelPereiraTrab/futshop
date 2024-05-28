import React, { useState } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faSave } from '@fortawesome/free-solid-svg-icons'; 
import '../css/Compra.css';

const Compra = () => {
  const [user, setUser] = useState({
    name: '',
    address: '',
    birthdate: '',
    phone: '',
    email: '',
    password: '',
    photo: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSaveChanges = () => {
    // Lógica para salvar as alterações aqui
    console.log('Alterações salvas:', user);
  };

  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className="profile-image-container">
          <div className="profile-image-square"></div>
        </div>
        <div className="profile-info">
          <div className="profile-info-item">
            <label>Nome:</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
          </div>
          <div className="profile-info-item">
            <label>Email:</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} />
          </div>
          <div className="profile-info-item">
            <label>Morada:</label>
            <input type="text" name="address" value={user.address} onChange={handleChange} />
          </div>
          <div className="profile-info-item">
            <label>Telefone:</label>
            <input type="text" name="phone" value={user.phone} onChange={handleChange} />
          </div>
          <div className="profile-info-item">
            <label>Password:</label>
            <div className="password-input">
              <input type={showPassword ? "text" : "password"} name="password" value={user.password} onChange={handleChange} />
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="save-button" onClick={handleSaveChanges}>
        <FontAwesomeIcon icon={faSave} /> Guardar Alterações</button>

        <button className="Logout" onClick={handleSaveChanges}> Log out</button>

    </div>
  );
};

export default Compra;
