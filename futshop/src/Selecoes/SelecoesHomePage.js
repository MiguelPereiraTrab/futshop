import React from "react";
import Header from "../js/Header";
import "./Selecoes.css";

const ligasLista = [
    { name: "Europa",  imgSrc: "../images/Ligas/ligaBetclic/ligaBetclic.png",   link: "../Ligas/Betclic" },
    { name: "América", imgSrc: "../images/Ligas/ligaBetclic/ligaBetclic.png", link: "../Ligas/Laliga" },
    { name: "Africa", imgSrc: "../images/Ligas/ligaBetclic/ligaBetclic.png", link: "../Ligas/PremierLeague" },

];

const SelecoesHomePage = () => {
    return (
        <>
            <Header></Header>
            <div className="container mt-8">
                <div className="row mt-3">
                    {ligasLista.map((league, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src={league.imgSrc} className="card-img-top" alt={league.name} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{league.name}</h5>
                                    <a href={league.link} className="btn btn-primary mt-auto">
                                        Ver Mais
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SelecoesHomePage;
