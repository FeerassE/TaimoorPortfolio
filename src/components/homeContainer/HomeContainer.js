import React, { Component } from 'react';

import Home from './Home';
import Nav from '../navContainer/Nav';
import Mobile_Nav from '../navContainer/Mobile_Nav';

// Router changes between pages
class HomeContainer extends Component{ 
    render(){
        return (
            <div className="homeContainer">
                <Nav />
                <Home />
            </div>
        )
    }
}
export default HomeContainer;