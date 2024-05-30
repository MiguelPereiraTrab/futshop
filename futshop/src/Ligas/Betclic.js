import React, { Component } from 'react';
import Header from '../js/Header';
import './Betclic.css'; // Importando o arquivo CSS
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

class Betclic extends Component {
  render() {
    const imageList = [
      { src: '../images/benfas.jpg', text: 'Benfica', link: '../Selecoes/Africa' },
      { src: '../images/benfas.jpg', text: 'Porto', link: 'porto1' },
      { src: '../images/benfas.jpg', text: 'Sporting', link: 'sporting1' },
      { src: '../images/benfas.jpg', text: 'Braga', link: 'braga1' },
      { src: '../images/benfas.jpg', text: 'Benfica Secundária', link: 'benfica2' },
      { src: '../images/benfas.jpg', text: 'Porto Secundária ', link: 'porto2' },
      { src: '../images/benfas.jpg', text: 'Sporting Secundária', link: 'sporting3' },
      { src: '../images/benfas.jpg', text: 'Braga Secundária', link: 'braga2' },

    ];
    
    return (
      <div className="betclic">
        <Header />
        <div className="linha1">
          <div className="image-container">
            {imageList.slice(0, 4).map((item, index) => (
              <div key={index} className="image-list-item">
                <a href={item.link}>
                  <img src={item.src} alt={`Imagem ${index + 1}`} />
                </a>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="linha1">
          <div className="image-container">
            {imageList.slice(4, 8).map((item, index) => (
              <div key={index} className="image-list-item">
                <a href={item.link}>
                  <img src={item.src} alt={`Imagem ${index + 4}`} />
                </a>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
    
  }
}

export default Betclic;
