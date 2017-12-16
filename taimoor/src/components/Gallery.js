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
                <div key = {photo.id} className="col-xs-12 col-sm-6 col-md-3 p-1 " id="gallery-col">
                    <img
                        className="gallery-image img-fluid w-100 h-100"
                        src={`${photo.image_url}`}
                    />
                </div>
            )
        })

        const rows = _.chunk(photoArray, 4)
        return rows.map((row,index) => {
            return (
            <div key={index} className="row">
            {
                row.map((photo) => {
                    return (photo);
                })
            }
            </div>
            )
        })
    }

    render() {
        return(
            <div>
                {this.props.window.width < 768 ? 
                <div className="row" style={{paddingTop: "40px"}}>
                {this.renderGallery()}
            </div> :
                <div className="row">
                    {this.renderGallery()}
                </div>
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