import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
    
	render() {
		return(
            <div className="footer_container">
            <div className="logo_footer animate__animated animate__bounce">
                 <span>like </span> 
                 <span className="heart_logo_footer">
                     <FontAwesome
                        className="fas fa-heart"
                        name="heart"                    
                    />
                </span>
                <span> o </span>
                <span className="heart_logo_footer">
                    <FontAwesome
                        className="fas fa-heart"
                        name="heart"                    
                    />
                </span>
                <span> 
                    roma © 2021 Copyright. All rights reserved.
                    <span className="heart_logo_footer_link">
                        <FontAwesome
                            className="fas fa-heart"
                            name="heart"                    
                        />
                    </span>
                    <a href="mailto:iamkiondra@gmail.com"> 
                    Hire me :-)                
                    </a>

                </span>
                             
            </div>
            </div>
        
		)
	}
};

export default Footer;