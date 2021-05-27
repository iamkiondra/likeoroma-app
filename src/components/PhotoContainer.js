import React from 'react';
import { Container } 
from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PhotoLikes from './PhotoLikes';

class PhotoContainer extends React.Component {

    /** The constructor. */
    constructor(props) {
        super(props);
        this.state = {
            hasResults: false,
            userId: '',
            photoId: '',
            results: null,
            display: 'inline-block',
            resetResults: false
        }

        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.HandleReset = this.HandleReset.bind(this);
    }

    /* This sets the saves a user's input value. */
    HandleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    /** On submit we hide the form then save the users input values.
     *  In a real full stack production application we would pass theses values
     *  to our RESTful API then retrieve data which would be displayed.
     */
    HandleSubmit(event) {
        event.preventDefault();

        this.setState({
            hasResults: true,
            display: 'none',
            userId: this.state.userId,
            photoId: this.state.photoId,
            resetResults: false
        });
    }

    /** This resets the states of our userId and photoId variables, then displays
     *  the input forms.
     */
    HandleReset(event) {
        event.preventDefault();
        this.setState({
            hasResults: false,
            resetResults: true,
            userId: '',
            photoId: ''
        });
    }


    render() {
        const hasResults = this.state.hasResults;
        const resetResults = this.state.resetResults;
        const display = 'display: ' + this.state.display;
        const likeform = document.getElementById("form_section");
        const formHeader = document.getElementById("form_header");
        let LikesContainer;

        /** If we have results from out API we are going to display the 
         * results container.
        */
        if (hasResults) {
            LikesContainer = <PhotoLikes onReset={this.HandleReset} />
            likeform.style.display = "none";
            formHeader.style.display = "none";
        }

        /** If the user has selected reset we hide the results then display
         * the form section.
         */
        if (resetResults) {
            likeform.style.display = "block";
            formHeader.style.display = "block";

        }

        return (
            <Container>
                <div id="like_form_container"
                    className="form_container"
                    style={{ display }} >
                    <div className="form_input_container" >

                        <div id="form_header"
                            className="animate__animated animate__jackInTheBox">
                            <h1 className="form_input_header">
                                <span className="font_header_heart">
                                    <FontAwesome
                                        className="fas fa-heart"
                                        name="heart"
                                    />
                                </span>
                                <span>Get</span>
                                <span className="form_header_hash">#</span>
                                <span>of Likes for a photo.</span>
                                <span className="font_header_heart">
                                    <FontAwesome
                                        className="fas fa-heart"
                                        name="heart"
                                    />
                                </span>
                            </h1>
                            <form
                                id="form_section"
                                onSubmit={this.HandleSubmit}
                                ref={this.props.likeform}
                            >
                                <input
                                    id="user_id_input"
                                    className="form_user_input"
                                    type="text"
                                    placeholder="User Id"
                                    name="userId"
                                    value={this.state.userId}
                                    onChange={this.HandleChange}
                                    required
                                />

                                <input
                                    id="photo_id_input"
                                    className="form_user_input"
                                    type="text"
                                    placeholder="Photo Id"
                                    name="photoId"
                                    value={this.state.photoId}
                                    onChange={this.HandleChange}
                                    required
                                />
                                <span>
                                    <button
                                        id="submitbtn"
                                        type="submit"
                                        className="submit_btn"
                                    >
                                        Submit
                                    </button>
                                </span>
                            </form>
                        </div>

                        <div>
                            {LikesContainer}
                        </div>

                    </div>
                    <div className="image_container"></div>
                </div>
            </Container>
        )
    }
};

export default PhotoContainer;