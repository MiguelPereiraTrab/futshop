import React, { Component } from 'react';
import Header from './Header';

class Registar extends Component {
  render() {
    return (
      <div>
         <Header isRegistarPage={true} />
        <label>Username </label> <input type="text" id="UsernameRegisto" ></input><p/>
        <label>Nome </label> <input type="text" id="NomeRegisto" ></input><p/>
        <label>Password </label> <input type="text" id="UserPasswordRegisto" ></input><p/>
        <label>Email </label> <input type="text" id="EmailRegisto" ></input><p/>
      </div>
    );
  }
}

export default Registar;

