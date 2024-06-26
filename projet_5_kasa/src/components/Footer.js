import React from 'react';
import LogoF from "../assets/img/LogoF.png";
import "../styles/components/_Footer.scss";

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={LogoF} alt="Logo footer" />
                <p>© 2020 Kasa. <span className="break">All</span> rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;