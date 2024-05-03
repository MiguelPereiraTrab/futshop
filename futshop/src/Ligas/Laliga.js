import React, { Component } from 'react';
import Header from '../js/Header';
import './Laliga.css';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

class Laliga extends Component {
  render() {
    const imageList = [
      { src: 'caminho_para_sua_imagem1.jpg', text: '1', link: 'link_para_benfica' },
      { src: 'caminho_para_sua_imagem2.jpg', text: '2', link: 'link_para_porto' },
      { src: 'caminho_para_sua_imagem3.jpg', text: '3', link: 'link_para_sporting' },
      { src: 'caminho_para_sua_imagem4.jpg', text: '4', link: 'link_para_braga' },
    ];
    
    return (
      <div className="Laliga">
        <Header />
        <div className="linha1">
          <div className="image-container">
            {imageList.slice(0, 3).map((item, index) => (
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
            {imageList.slice(3, 6).map((item, index) => (
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

export default Laliga;
