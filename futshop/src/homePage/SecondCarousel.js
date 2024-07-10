import React, { useState } from "react";
import { Carousel } from "react-bootstrap"; // Importe o Carousel do react-bootstrap

const SecondCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const numberOfImages = 4;

    return (
        <div className="full-screen">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {Array.from({ length: numberOfImages }, (_, idx) => (
                    <Carousel.Item key={idx}>
                        <img src={`../images/HomePage/feedbacks/feedback${idx + 1}.png`} alt={`Imagem ${idx + 1}`} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default SecondCarousel;
