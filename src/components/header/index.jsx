import React from "react";
import "./style.scss";
import metamodelslogo from "../../assets/metamodels-logo.svg";
const Header = () => {
    return (
    <header className="header-main">
        <div className="header-wrapper">
            <div className="header-content">
               <div className="left-section-wrapper">
            <div className="logo-wrapper">
            <img src={metamodelslogo} alt="logo" className="mm-logo"/>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Use Cases</a></li>
                    <li><a href="/about">Resources</a></li>
                    <li><a href="/contact">Pricing</a></li>
                </ul>
                
            </nav>    
            </div>
            <div className="right-section-wrapper">
             <div className="nav-btn-wrapper">
                    <button className="logInBtn"></button>
                    <button className="requestDemoBtn"></button>
                </div>   
            </div>                
            </div>
        </div>
        </header>
    );
};

export default Header;