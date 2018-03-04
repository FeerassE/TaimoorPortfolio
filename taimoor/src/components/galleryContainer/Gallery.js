import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPhotos } from '../../actions/index';
import { bindActionCreators } from 'redux';


class Gallery extends Component {

    componentWillMount(){
        this.props.fetchPhotos();
    }
    

    renderGallery() {
        const photoArray = _.map(this.props.photos, (photo) => {
            return (
                <div key = {photo.id} id="gallery-img">
                    <img
                    src={`${photo.image_url}`}
                    />
                </div>
            )
        })

        return photoArray;
    }

    render() {
        return(
            <div className="grid-gallery">
            {this.renderGallery()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        photos: state.photos,
        window: state.window,
    };
}

export default withRouter(connect(mapStateToProps, { fetchPhotos })(Gallery));