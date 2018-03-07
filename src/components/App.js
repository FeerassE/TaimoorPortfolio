import React, { Component } from 'react';
import {connect} from 'react-redux';

import Nav from './navContainer/Nav';
import Main from './Main';

import { updateDimensions, fetchPhotos, fetchHomePhoto } from '../actions';

import {Switch, Route, BrowserRouter, withRouter} from 'react-router-dom';


class App extends Component {

componentWillMount() {
  this.props.updateDimensions(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", () => {
      this.props.updateDimensions(window.innerWidth, window.innerHeight);
    });
  
  this.props.fetchPhotos();

  this.props.fetchHomePhoto();
  
}

  render() {
    return (
      <div className="App">
        <div className="grid-app">
              <Main />
          </div>
      </div>
    );
  }
}


export default withRouter(connect(null, { updateDimensions, fetchPhotos, fetchHomePhoto })(App));
