import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

class MovieBox extends Component {
    constructor(props){
        super(props);
        this.state = {currentVideo: this.props.data}
    }

    componentWillReceiveProps(nextProps){
        this.setState({currentVideo: nextProps.data});
    }

    render(){
        return(
            <Jumbotron className="embed-responsive embed-responsive-16by9">
                <video id="videoPlayer" className="embed-responsive-item" src={this.state.currentVideo.url} controls>
                </video>
            </Jumbotron>
        );
    }
}

export default MovieBox;
