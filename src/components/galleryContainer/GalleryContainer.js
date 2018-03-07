import React, { Component } from 'react';

import Gallery from './Gallery';
import Nav from '../navContainer/Nav';
import Mobile_Nav from '../navContainer/Mobile_Nav';

// Router changes between pages
class GalleryContainer extends Component{ 
    render(){
        return (
            <div className="galleryContainer">
                <Mobile_Nav />
                <Gallery />
            </div>
        )
    }
}
export default GalleryContainer;