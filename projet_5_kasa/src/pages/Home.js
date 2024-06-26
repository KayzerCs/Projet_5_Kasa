import React, { useEffect, useState } from "react";
import NavLogo from "../components/NavLogo";
import Footer from "../components/Footer";
import Banniere from "../components/Banniere";
import CardContainer from "../components/CardContainer";

import homeImage from "../assets/img/paysage_1.jpg";

const Home = () => {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 335);

  useEffect(() => {
    const handleResize = () => setIsResponsive(window.innerWidth <= 335);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const text = (
    <>
      Chez vous,{" "}
      {isResponsive ? (
        <span className="break">partout et ailleurs</span>
      ) : (
        "partout et ailleurs"
      )}
    </>
  );

  return (
    <div>
      <div className="body">
        <NavLogo />
        <Banniere backgroundImage={homeImage} text={text} customClass="home" />
        <div>
          <CardContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
