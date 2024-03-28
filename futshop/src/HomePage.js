import React, { Component } from 'react';

class HomePage extends Component {
    handleButtonClick = (e) => {
        const buttonId = e.target.id;
        if (buttonId === 'buttonLogin') {
            window.location.href = '/Login';
        } else if (buttonId === 'buttonRegisto') {
            window.location.href = '/Registar';
        }
    };

    render() {
        return (
            <div>
                <button id="buttonLogin" onClick={this.handleButtonClick}>Odeio isto porque é o monhê a dar a cadeira</button> <p />
                <button id="buttonRegisto" onClick={this.handleButtonClick}>Odeio isto mas registo</button>
            </div>
        );
    }
}

export default HomePage;
