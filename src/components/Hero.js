import React from 'react';
var FontAwesome = require("react-fontawesome");

const Hero = () => {

    return (
        <div className="hero animate__animated animate__fadeInUp">
            <div id="hero_social_icons">
                <FontAwesome
                    className="fab fa-instagram"
                    name="instagram"
                    size="5x"                
                />
            </div>
            <h1>
                Social Media Photo Like Service.
            </h1>
            <h2>Get info on photos from your favorite social media 
                platforms.</h2>
            
            <div id="try_social_btn" className="hero_btns">
            <a href="#like-section">
                <button className="btn_services">                  
                    <span className="btn-text">Try Now.</span>                   
                </button>
                </a>
            </div>
        </div>       
    );
}

export default Hero;