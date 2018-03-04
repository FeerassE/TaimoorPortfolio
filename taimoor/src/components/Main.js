import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import HomeContainer from './homeContainer/HomeContainer';
import GalleryContainer from './galleryContainer/GalleryContainer';
import DropDown from './navContainer/DropDown';

// Router changes between pages
class Main extends Component{ 
    render(){
        return (
            <div className="main">
                <main>
                        <Switch>
                            <Route path="/" exact component={HomeContainer} />
                            <Route path="/gallery" exact component={GalleryContainer}/>
                            <Route Path="/menu" component={DropDown}/>
                        </Switch>
                </main>
            </div>
        )
    }
}
export default Main;