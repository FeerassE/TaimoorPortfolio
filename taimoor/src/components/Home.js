import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhotos } from '../actions/index';


class Home extends Component {

    componentWillMount(){
        this.props.fetchPhotos();
    }
    
    clickButton(e){
        e.preventDefault();
        console.log(this.props.photos)
    }

    renderGallery() {
        return _.map(this.props.photos, photo => {
            return (
                <div className="col-xs-12 col-md-3 gallery-image">
                    <img
                        style = {{width: '100%'}}
                        src={`${photo.image_url}`}
                    />
                </div>
            )
        })

    }

    render() {
        return(
            <div>
                <div className="row">
                    {this.renderGallery()}
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return { photos: state.photos }
}

export default connect(mapStateToProps, { fetchPhotos })(Home);