import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPhotos } from '../actions/index';
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

        // Don't think I need to chunk it anymore
        // const rows = _.chunk(photoArray, 4)
        // return rows.map((row,index) => {
        //     return (
        //     <div key={index}>
        //     {
        //         row.map((photo) => {
        //             return (photo);
        //         })
        //     }
        //     </div>
        //     )
        // })

        return photoArray;

    }

    render() {
        return(
            <div className="grid-gallery">
            {/* Why is it calling renderGallery twice like this? */}
                {this.props.window.width < 768 ? 
                this.renderGallery()
                :
                this.renderGallery()
                }
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