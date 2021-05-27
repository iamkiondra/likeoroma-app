import React from 'react';
import { Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Footer from './Footer';

class Info extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
    return (
        <div>
        <div id="info_container" className="info_tech">
            <Row className="info_header">            
                <div>                    
                    <Row>
                        <div className="animate__animated animate__jackInTheBox">
                            <h2 className="tech_header">
                                <span> - Our Technology Solution -</span>
                            </h2>
                        </div> 
                    </Row>
                </div>
                <Row>
                    <div className="description_container">
                        <div>
                            <Row>
                                <h4 className="tech_container_title">
                                our problem.</h4>
                                <p> Lorem ipsum dolor sit amet, at 
                                    delicata recteque vel. Et ludus antiopam 
                                    mei, id nam dicant scripta propriae, summo 
                                    verear sed et.
                                </p>
                                    
                                <hr />
                                <h4 className="tech_container_title">
                                our solution.</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, at 
                                    delicata recteque vel. Et ludus antiopam 
                                    mei, id nam dicant scripta propriae, summo 
                                    verear sed et.
                                </p>
                            </Row>
                        </div>                                                              
                    </div>
                    <div className="frontend_container">
                        <Row>
                            <div className="animate__animated animate__fadeIn">
                                <h4 className="tech_container_title">
                                    <span className="font_header_heart">
                                        <FontAwesome
                                            className="fas fa-code"
                                            name="code"
                                        />
                                    </span>
                                    <span> front end tech </span>
                                    <span className="font_header_heart">
                                        <FontAwesome
                                            className="fas fa-code"
                                            name="code"
                                        />
                                    </span>
                                </h4>
                            </div>
                            <div>
                                
                            </div>
                        </Row>
                    </div>
                    <div className="backend_container">
                        <Row>
                            <div className="animate__animated animate__fadeIn">
                                <h4 className="tech_container_title">
                                    <span className="font_header_heart">
                                        <FontAwesome
                                            className="fas fa-code"
                                            name="code"
                                        />
                                    </span>
                                    <span>back end tech. </span>
                                    <span className="font_header_heart">
                                        <FontAwesome
                                            className="fas fa-code"
                                            name="code"
                                        />
                                    </span>
                                </h4>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Row>
        </div>
        <Footer />   
    </div>
    )
    }
};

export default Info;