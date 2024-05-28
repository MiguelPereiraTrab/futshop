import React, { useState } from 'react';
import '../css/HomePage.css';
import Header from './Header';
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleButtonClick = (page) => {
    window.location.href = page;
  };

  const imageList = [
    { src: '../images/benfica.jpg', text: 'Benfica', link: 'link_para_benfica' },
    { src: '../images/porto.jpeg', text: 'Porto', link: 'link_para_porto' },
    { src: '../images/sporting.jpg', text: 'Sporting', link: 'link_para_sporting' },
    { src: '../images/braga.jpg', text: 'Braga', link: 'link_para_braga' },
  ];

  return (
    <div>
      <Header />
      <div className='carousel-container'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src='../images/merdaa.jpg' alt="Imagem 1" preload="auto" />
            <Carousel.Caption>
              <h3>Liga Betclic</h3>
              <button className="carousel-button" onClick={() => handleButtonClick('../Ligas/Betclic')}>Comprar</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='../images/merdaa.jpg' alt="Imagem 2" preload="auto" />
            <Carousel.Caption>
              <h3>Portugal</h3>
              <button className="carousel-button" onClick={() => handleButtonClick('../Selecoes/Europa')}>Comprar</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='../images/merdaa.jpg' alt="Imagem 3" preload="auto" />
            <Carousel.Caption>
              <h3>Euro 2024</h3>
              <button className="carousel-button" onClick={() => handleButtonClick('../Ligas/Betclic')}>Comprar</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='../images/merdaa.jpg' alt="Imagem 4" preload="auto" />
            <Carousel.Caption>
              <h3>Retro</h3>
              <button className="carousel-button" onClick={() => handleButtonClick('../Retro/Selecoes')}>Comprar</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h1 className='best-sellers'>BEST SELLERS</h1>
      <div className="betclic">
        <div className="linha1">
          <div className="image-container">
            {imageList.map((item, index) => (
              <div key={index} className="image-list-item">
                <a href={item.link}>
                  <img src={item.src} alt={'Imagem ${index + 1}'} />
                </a>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className='feedback'>FEEDBACK</h1>
      <div className='carousel-container-feedback'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src='../images/action (1).png' alt="Imagem 1" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='../images/action (1) (1).png' alt="Imagem 1" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='../images/action (2) (1).png' alt="Imagem 1" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='../images/action (3) (1).png' alt="Imagem 1" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
          </div>
    </div>
  );
}

export default HomePage;