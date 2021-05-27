import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import { UserPhotoLikes } from '../data';
import { Container } from 'react-bootstrap';


class PhotoLikes extends Component {

    /** The constructor. */
    constructor(props) {
        super(props);
        this.onHandleReset = this.onHandleReset.bind(this);
        this.state = {
            photos: ''
        }
    }

    /** On reset we call the reset function which is handled in the 
     * PhotoContainer component.
     */
    onHandleReset(event) {
        event.preventDefault();        
        this.props.onReset(event, this.state);
    }

    render() {
        return (
            <Container>
                <div className="results_container">
                    <div className="profile_container">

                        <img
                            className="profile_img"
                            src={UserPhotoLikes.profileUrl}
                        />
                        <div className="profile_info">
                            @{UserPhotoLikes.username}
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ display: "block" }}>
                        <img
                            className="photo_img"
                            src={UserPhotoLikes.photoUrl}
                        />
                    </div>

                    <div style={{ display: "block" }}>

                        <div className="photo_likes_results">
                            <FontAwesome
                                className="fab fa-heart"
                                name="heart"
                                size="lg"
                            />
                            <span>
                                {UserPhotoLikes.likes}
                            </span>


                        </div>
                        <div className="photo_tags">
                            {UserPhotoLikes.tags}
                        </div>
                        <button
                            id="resetbtn"
                            type="submit"
                            className="reset_btn"
                            onClick={this.onHandleReset}
                        >
                            <FontAwesome
                                className="fab fa-undo"
                                name="undo"
                                size="lg"
                            /> Reset
                        </button>
                    </div>
                </div>
        </Container>            
        );
    }

};

export default PhotoLikes;