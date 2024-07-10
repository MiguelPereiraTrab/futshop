import React from "react";
import "../css/HomePage.css";
import Header from "../js/Header";
import FirstCarousel from "./FirstCarousel";
import SecondCarousel from "./SecondCarousel";
import BestSellers from "./BestSellers";
import ReactFullpage from "@fullpage/react-fullpage";
function HomePage() {
    return (
        <div>
            <Header />

            <ReactFullpage
                scrollingSpeed={1000} /* Options here */
                render={() => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <div className="carousel-container">
                                    <FirstCarousel />
                                </div>
                            </div>
                            <div className="section">
                                <div className="bestSellers">
                                    <h1 className="best-sellers">BEST SELLERS</h1>
                                    <BestSellers />
                                </div>
                            </div>
                            <div className="section">
                                <>
                                    <div className="feedback">
                                        <h1 className="feedback">FEEDBACK</h1>
                                        <div className="carousel-container-feedback">
                                            <SecondCarousel />
                                        </div>
                                    </div>
                                </>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    );
}

export default HomePage;
