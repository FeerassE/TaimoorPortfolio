import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPhotos } from '../../actions/index';
import { bindActionCreators } from 'redux';


class Gallery extends Component {
    constructor(){
        super();

        this.state = {
            currentModalPhoto: null,
            displayModalPhoto: false
        }

        this.displayModalPhoto = this.displayModalPhoto.bind(this);
        this.setModalPhoto = this.setModalPhoto.bind(this);
        this.exitModalPhoto = this.exitModalPhoto.bind(this);
    }

    componentWillMount(){
        this.props.fetchPhotos();
    }

    setModalPhoto(url){
        this.setState({currentModalPhoto: url});
    }
    
    displayModalPhoto(url){
        this.setState({displayModalPhoto: true})
        this.setState({currentModalPhoto: url});
        console.log(this.props);
    }

    exitModalPhoto(){
        this.setState({displayModalPhoto: false});
    }

    renderGallery() {
        const photoArray = _.map(this.props.photos, (photo) => {
            return (
                <div 
                key = {photo.id} id="gallery-img" 
                onClick={() => this.displayModalPhoto(photo.image_url)}
                >
                    <img
                    src={`${photo.image_url}`}
                    />
                </div>
            )
        })

        return photoArray;
    }


    renderMobileGallery() {
        const photoArray = _.map(this.props.photos, (photo) => {
            return (
                <div 
                key = {photo.id} id="gallery-img" 
                >
                    <img
                    src={`${photo.image_url}`}
                    />
                </div>
            )
        })

        return photoArray;
    }

    renderModal(){
        if(this.state.displayModalPhoto){
            return (
                <div className="modal-container">
                    <div className="gallery-modal">
                        <img className="modal-image" src={this.state.currentModalPhoto} />
                        <svg onClick={this.exitModalPhoto} className="modal-cancel-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9 21.9" xlinkHref= "http://www.w3.org/1999/xlink" enable-background="new 0 0 21.9 21.9">
                            <path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z"/>
                        </svg>
                    </div>
                </div>
            )
        }
        else{
            return(null)
        }
    }

    render() {
        if (this.props.window.width > 768){
        return(
            <div>
                <div className="grid-gallery">
                    {this.renderGallery()}
                </div>
                     {this.renderModal()}
            </div>
        )
    }
    else {
        return(
                <div>
                    <div className="grid-gallery">
                        {this.renderMobileGallery()}
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return { 
        photos: state.photos,
        window: state.window,
    };
}

export default connect(mapStateToProps, { fetchPhotos })(Gallery);