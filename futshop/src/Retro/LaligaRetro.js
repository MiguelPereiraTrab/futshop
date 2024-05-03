import React, { Component } from 'react';
import Header from '../js/Header';
import './LaligaRetro.css'; // Importando o arquivo CSS


class LaligaRetro extends Component {
  render() {
    const imageList = [
      { src: '../images/benfas.jpg', text: 'juven', link: 'link_para_benfica' },
      { src: 'caminho_para_sua_imagem2.jpg', text: 'milan', link: 'link_para_porto' },
      { src: 'caminho_para_sua_imagem3.jpg', text: 'juven', link: 'link_para_sporting' },
      { src: 'caminho_para_sua_imagem4.jpg', text: 'juven', link: 'link_para_braga' },
      { src: '../images/benfas.jpg', text: 'juven Secundária', link: 'link_para_benfica' },
      { src: 'caminho_para_sua_imagem2.jpg', text: 'milan Secundária ', link: 'link_para_porto' },
      { src: 'caminho_para_sua_imagem3.jpg', text: 'milan Secundária', link: 'link_para_sporting' },
      { src: 'caminho_para_sua_imagem4.jpg', text: 'milan Secundária', link: 'link_para_braga' },

    ];
    
    return (
      <div className="LaligaRetro">
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

export default LaligaRetro;
