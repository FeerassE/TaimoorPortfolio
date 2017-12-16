import React, { Component } from 'react'
import { connect } from 'react-redux';

import {Link} from 'react-router-dom';

import DropDown from './DropDown.js';


class MobileNav extends Component {
    constructor(props){
        super();
        this.state = {dropDownOpen: false}
        

        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler() {
        this.setState( prevState => {
            return {dropDownOpen: !prevState.dropDownOpen}
        }, () => { console.log (this.state)});
    }

    render() {
        console.log(this.props.window);
        if (this.props.window.width < 768) {
            return(             
            <div className="fixed-top" id="mobile-nav-container">
                {this.state.dropDownOpen ?                 
                    <div className="row">
                        <Link to={this.props.path}>
                            <img src='./icons/if_menu-alt_134216.svg' onClick={this.onClickHandler} id="bg-button"/>
                        </Link>
                            <h1 id="menu-title-taimoor-mobile"> Taimoor Khan </h1>
                    </div>                 
                    :
                    <div className="row">
                    <Link to="/menu">
                        <img src='./icons/if_menu-alt_134216.svg' onClick={this.onClickHandler} id="bg-button"/>
                    </Link>
                        <h1 id="menu-title-taimoor-mobile"> Taimoor Khan </h1>
                    </div>                 }
            </div>
        )
    }

        else
        return(
            null
        )
    }
}
// put another conditional statement inside the div above that display the dropdown component if the state is true.
// set the z-index higher. Make sure outside of the row. 
function mapStateToProps(state) {
    return { 
        window: state.window,
        path: state.path
    };
}

export default connect(mapStateToProps, null)(MobileNav);
