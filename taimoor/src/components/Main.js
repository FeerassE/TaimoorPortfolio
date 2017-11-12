import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './Home';

// Router changes between pages
class Main extends Component{ 
    
    render(){
        return (
            <div className="col-md-10 col-xs-12">
                <main>
                    <BrowserRouter>
                        <div>
                            <Switch>
                                <Route path="/" component={Home}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </main>
            </div>
        )
    }
}
export default Main;