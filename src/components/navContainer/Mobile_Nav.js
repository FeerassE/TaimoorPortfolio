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
                        <div>
                            <div className="mobile-nav">
                                <div className="mobile-nav-bar">
                                {this.state.dropDownOpen ? 
                                        <svg onClick={this.onClickHandler} className="drop-down-cancel-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9 21.9" xlinkHref= "http://www.w3.org/1999/xlink" enable-background="new 0 0 21.9 21.9">
                                            <path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z"/>
                                        </svg>
                                        
                                        :
                                        <img src='./icons/burger-button.svg' onClick={this.onClickHandler} id="bg-button"/>
                                }
                                        <span className="mobile-nav-title"> Taimoor Khan </span>
                                </div>
                            </div>
                            <DropDown />
                        </div>

                    :
                        <div className="mobile-nav">
                            <div className="mobile-nav-bar">
                                    <img src='./icons/burger-button.svg' onClick={this.onClickHandler} id="bg-button"/>
                                    <span className="mobile-nav-title"> Taimoor Khan </span>
                            </div>
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
