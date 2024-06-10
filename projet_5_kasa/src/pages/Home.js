import React from "react";
import NavLogo from "../components/NavLogo";
import Footer from "../components/Footer";
import Banniere from "../components/Banniere";

import homeImage from "../assets/img/paysage_1.jpg";

const Home = () => {
  return (
    <div>
      <NavLogo />
      <Banniere
        backgroundImage={homeImage}
        text="Chez vous, partout et ailleurs"
        customClass="home"
      />
      <Footer />
    </div>
  );
};

export default Home;
