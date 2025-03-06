import React from 'react';
import "./style.scss";
import FooterLogo from '../../assets/Footer_logo.svg';
import FacebookIcon from '../../assets/Facebook.svg';
import InstagramIcon from '../../assets/Instagram.svg';
import LinkedinIcon from '../../assets/Linkedin.svg';
const Footer = () => {
    const footerLogo = FooterLogo;
    const facebookIcon = FacebookIcon;
    const instagramIcon = InstagramIcon;
    const linkedinIcon = LinkedinIcon;
    return (
        <footer>
            <div classname="footer-container-wrapper">
                <div className="top-section">
                    <div className="logo-wrapper">
                        <img src={footerLogo} alt="Footer-logo" />
                    </div>
                    <div className="footer-content">
                        <p className="footer-para">MetaModels is shaping the future of fashion with cutting-edge technology.
                        We’re revolutionizing the way brands create and connect. 
                        With a diverse range of digital models, we make it effortless to produce high-quality visuals that elevate your brand’s presence. 
                        Reach new customers, break into fresh markets, and leave a lasting impact—all powered by innovation. Together, we’re redefining the fashion industry for tomorrow.</p>
                    </div>
                </div>
                <div className="bottom-section">
                    <hr />
                    <div className="social-wrapper">
                        <div className="left-wrapper">
                            © <span className='copyright'>MetaModels 2025 | All rights reserved</span>
                        </div>
                        <div className="right-wrapper">
                            <div className="social_icon_wrapper">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src={facebookIcon} alt="Facebook" />
                                </a>
                            </div>
                            <div className="social_icon_wrapper">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src={instagramIcon} alt="Instagram" />
                                </a>
                            </div>
                            <div className="social_icon_wrapper">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinIcon} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;