import React, { Component } from 'react';

import NavBar from './Nav_Bar';
import Main from './Main';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <NavBar />        
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
