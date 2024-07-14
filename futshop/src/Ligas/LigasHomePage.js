import React from "react";
import Header from "../js/Header";
import "./Ligas.css";

const ligasLista = [
    { name: "Liga Betclic",  imgSrc: "../images/Ligas/ligaBetclic/ligaBetclic.png",   link: "../Ligas/Betclic" },
    { name: "LaLiga", imgSrc: "../images/Ligas/LaLiga/LaLiga.png", link: "../Ligas/Laliga" },
    { name: "Premier League", imgSrc: "../images/Ligas/PremierLeague/PremierLeague.png", link: "../Ligas/PremierLeague" },

];

const LigasHomePage = () => {
    return (
        <>
            <Header></Header>
            <div className="container mt-8">
            <div className="row mt-3">
                    {ligasLista.map((league, index) => (
                        <div key={index} className="col-md-4 mb-4" style={{ marginTop: '20vh' }}>
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

export default LigasHomePage;
