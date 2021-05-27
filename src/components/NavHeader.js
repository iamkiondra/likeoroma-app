import React from 'react';
import { Navbar } from 'react-bootstrap';
var FontAwesome = require("react-fontawesome");

class NavHeader extends React.Component {

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <nav>
                        <div className="logo animate__animated animate__bounce">
                            <span>like </span>
                            <span className="heart_logo">
                                <FontAwesome
                                    className="fas fa-heart"
                                    name="heart"
                                />
                            </span>
                            <span> o </span>
                            <span className="heart_logo">
                                <FontAwesome
                                    className="fas fa-heart"
                                    name="heart"
                                />
                            </span>
                            <span> roma</span>
                        </div>
                
                        <ul>
                            <li>
                                <button className="btn_services">
                                    <span className="btn-text">Request Demo.</span>
                                </button>
                            </li>                    
                        </ul>
                    </nav>
                </Navbar>
            </>       
        )
    }  
}

export default NavHeader;
