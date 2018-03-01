import React, {Component} from 'react';
import { connect } from 'react-redux';

import SideBar from './Side_Bar';
import Mobile_Nav from './Mobile_Nav';

class Nav extends Component { 
    render(){
        if(this.props.window.width <= 768){
            return(
                <Mobile_Nav />
            )
        }
        else{
            return(
                <SideBar />
            )
        }
    }
}
function mapStateToProps(state) {
    return { 
        window: state.window,
    };
}
export default connect(mapStateToProps, null)(Nav);
