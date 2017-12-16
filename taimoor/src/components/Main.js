import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Gallery from './Gallery';
import DropDown from './DropDown';

// Router changes between pages
class Main extends Component{ 
    render(){
        return (
            <div className="col-xs-12 col-md-10">
                <main>
                    <div>
                        <Switch>
                            <Route path="/" exact component={Gallery}/>
                            <Route Path="/menu" component={DropDown}/>
                        </Switch>
                    </div>
                </main>
            </div>
        )
    }
}
export default Main;