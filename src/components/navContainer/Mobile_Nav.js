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
            return(             
            <div>
                {this.state.dropDownOpen ? 
                        <div className="mobile-nav">
                            <div className="mobile-nav-bar">
                                    <img src='./icons/burger-button.svg' onClick={this.onClickHandler} id="bg-button"/>
                                    <span className="mobile-nav-title"> Taimoor Khan </span>
                            </div>
                        </div>
                    :
                    <div>
                        <div className="mobile-nav">
                            <div className="mobile-nav-bar">
                                    <img src='./icons/burger-button.svg' onClick={this.onClickHandler} id="bg-button"/>
                                    <span className="mobile-nav-title"> Taimoor Khan </span>
                            </div>
                        </div>
                        <DropDown />
                    </div>
                   }
            </div>
        )
    }
}
// put another conditional statement inside the div above that display the dropdown component if the state is true.
// set the z-index higher. Make sure outside of the row. 
function mapStateToProps(state) {
    return { 
        path: state.path
    };
}

export default connect(mapStateToProps, null)(MobileNav);