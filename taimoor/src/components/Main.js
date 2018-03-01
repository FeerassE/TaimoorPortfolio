import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Gallery from './Gallery';
import DropDown from './navContainer/DropDown';

// Router changes between pages
class Main extends Component{ 
    render(){
        return (
            <div className="main">
                <main>
                        <Switch>
                            <Route path="/" exact component={Gallery}/>
                            <Route Path="/menu" component={DropDown}/>
                        </Switch>
                </main>
            </div>
        )
    }
}
export default Main;