import React,{ Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

class NavBar extends Component {
    render(){
        return (
            <div className="col-md-2">
                <div id="nav_bar">
                    <nav aria-orientation="vertical">
                        <h1 className="menu-title-taimoor"> Taimoor Khan </h1>
                        <a className="nav-link active" href="#">Home</a>
                        <a className="nav-link" href="#">Gallery</a>
                        <a className="nav-link" href="#">Services</a>
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </nav>
                </div> 
            </div>
        )
    }
}

export default NavBar;