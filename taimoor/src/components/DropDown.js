import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCurrentRoute } from '../actions/index';

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
        if (this.props.window.width > 768) {
            return (
                <Redirect push to={this.props.path}/>
            )
        } 
        return (
                <div className= "dropDownMenu">
                    <div className= "col-sm-12">
                        <ul className="nav flex-column drop-down-list">
                            <li onClickSelection={this.onClickSelection("/")} className="nav-item">
                                <Link to='/'>
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                Services
                            </li>
                            <li className="nav-item">
                                Blog
                            </li>
                        </ul>
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
