import React from "react";
import Header from "../js/Header";
import "./Retro.css";

const ligasLista = [
    { name: "Liga Betclic Retro",  imgSrc: "../images/Retro/ligaBetclicRetro/ligaBetclicRetro.png",   link: "../Ligas/Betclic" },
    { name: "LaLiga Retro", imgSrc: "../images/Retro/LaLigaRetro/LaLigaRetro.png", link: "../Ligas/Laliga" },
    { name: "Premier League Retro", imgSrc: "../images/Retro/PremierLeagueRetro/PremierLeagueRetro.png", link: "../Ligas/PremierLeague" },

];

const RetroHomePage = () => {
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

export default RetroHomePage;
