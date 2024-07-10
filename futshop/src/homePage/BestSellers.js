import React from "react";

const BestSellers = () => {
    const imageList = [
        { src: "../images/HomePage/bestsellers/bestseller1.jpg", text: "Benfica", link: "link_para_benfica" },
        { src: "../images/HomePage/bestsellers/bestseller2.jpg", text: "Porto", link: "link_para_porto" },
        { src: "../images/HomePage/bestsellers/bestseller3.jpg", text: "Sporting", link: "link_para_sporting" },
        { src: "../images/HomePage/bestsellers/bestseller4.jpg", text: "Braga", link: "link_para_braga" },
    ];

    return (
        <div className="full-screen">
            <div className="betclic">
                <div className="linha1">
                    <div className="image-container">
                        {imageList.map((item, index) => (
                            <div key={index} className="image-list-item">
                                <a href={item.link}>
                                    <img src={item.src} alt={`Imagem ${index + 1}`} />
                                </a>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellers;
