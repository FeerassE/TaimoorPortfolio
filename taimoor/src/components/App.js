import React, { Component } from 'react';
import {connect} from 'react-redux';

import NavBar from './Nav_Bar';
import Main from './Main';
import MobileNav from './Mobile_Nav';

import { updateDimensions } from '../actions';

import {Switch, Route, BrowserRouter, withRouter} from 'react-router-dom';


class App extends Component {

componentWillMount() {
  this.props.updateDimensions(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", () => {
      this.props.updateDimensions(window.innerWidth, window.innerHeight);
    });
}

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <MobileNav />
            <div className="row">
            <NavBar />        
            <Main />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(connect(null, { updateDimensions })(App));
