import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const FirstCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleButtonClick = (path) => {
        window.location.href = path;
    };

    const items = [
        {
            src: "../images/HomePage/carousel/carousel1.jpg",
            alt: "Imagem 1",
            caption: "Liga Betclic",
            buttonPath: "../Ligas/Betclic",
        },
        {
            src: "../images/HomePage/carousel/carousel2.jpg",
            alt: "Imagem 2",
            caption: "Portugal",
            buttonPath: "../Selecoes/Europa",
        },
        {
            src: "../images/HomePage/carousel/carousel3.jpg",
            alt: "Imagem 3",
            caption: "Euro 2024",
            buttonPath: "../Ligas/Betclic",
        },
        {
            src: "../images/HomePage/carousel/carousel4.jpg",
            alt: "Imagem 4",
            caption: "Retro",
            buttonPath: "../Retro/Selecoes",
        },
        {
            src: "../images/HomePage/carousel/carousel5.jpg",
            alt: "Imagem 5",
            caption: "Retro",
            buttonPath: "../Retro/Selecoes",
        },
        {
            src: "../images/HomePage/carousel/carousel6.jpg",
            alt: "Imagem 6",
            caption: "Retro",
            buttonPath: "../Retro/Selecoes",
        },
    ];

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {items.map((item, idx) => (
                <Carousel.Item key={idx}>
                    <img src={item.src} alt={item.alt} preload="auto" />
                    <Carousel.Caption>
                        <h3>{item.caption}</h3>
                        <button className="carousel-button" onClick={() => handleButtonClick(item.buttonPath)}>
                            Comprar
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default FirstCarousel;
