import React from "react";
import NavLogo from "../components/NavLogo";
import Footer from "../components/Footer";
import Banniere from "../components/Banniere";
import CardContainer from "../components/CardContainer";

import homeImage from "../assets/img/paysage_1.jpg";

const Home = () => {
  return (
    <div>
      <div className="body">
        <NavLogo />
        <Banniere
          backgroundImage={homeImage}
          text="Chez vous, partout et ailleurs"
          customClass="home"
        />
        <div>
          <CardContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
