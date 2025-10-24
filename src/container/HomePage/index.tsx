import React from "react";
import Typewriter from "../../components/Typewriter";
import SCLogo from "../../images/SCLogo.png";

import "./style.css";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <>
      <div className="container home-container" id="home">
        <img src={SCLogo} className="logo" alt="CUJ logo" />
        <Typewriter words={["Deep Cleaning Solution"]} className="typing-word" />
        <h3 className="company-info">Melayani Jabodetabek, Bandung, Semarang, Jogja, Surabaya</h3>
      </div>
      <Footer />
    </>

  );
};

export default Homepage;
