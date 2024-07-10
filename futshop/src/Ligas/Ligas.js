import React, { Component } from "react";
import Header from "../js/Header";
import "./Ligas.css";

class Ligas extends Component {
    render() {
        const { imageList } = this.props; // Recebe a lista de imagens via props

        return (
            <div className="image-list-display">
                <Header />
                <div className="images">
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
            </div>
        );
    }
}

export default Ligas;
