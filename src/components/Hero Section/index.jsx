import React from "react";
import './style.scss';
import HeroBanner from "../../assets/images/Hero-banner.png";

const HeroSection= () =>{
return(
<div className="hero-section-wrapper">
  <img src= {HeroBanner} alt="" />
  <div className="content-wrapper">
    <div className="header-content">
        <p className="tag-line">Metamodels Image Upload Guidelines</p>
    </div>
    </div>  
</div>    
);
}
export default HeroSection;
