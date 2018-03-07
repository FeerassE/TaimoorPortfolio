import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCurrentRoute } from '../../actions/index';

import { Link, withRouter, Redirect } from 'react-router-dom';

class DropDown extends Component {
    constructor(props){
        super();
        this.onClickSelection = this.onClickSelection.bind(this);


    }
    onClickSelection(path){
        this.props.updateCurrentRoute(path);
    }
    render(){
        return (
                <div className= "drop-down-menu">
                    <div>
                        <div className="drop-down-list">
                            <a href="/"  className="drop-down-item">
                                Home
                            </a>    
                            <a href="/gallery"  className="drop-down-item">
                                Gallery
                            </a>
                            <a href="/services"className="drop-down-item">
                                Services
                            </a>
                        </div>
                    </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { 
        window: state.window,
        path: state.path
    };
}

export default withRouter(connect(mapStateToProps, { updateCurrentRoute })(DropDown));
