import React,{ Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

class NavBar extends Component {
    render(){
        return (
            <div className="col-md-2 d-none d-md-block"  id="nav_bar_container">
                <div id="nav_bar">
                    <nav aria-orientation="vertical">
                        <h1 id="menu-title-taimoor"> Taimoor Khan </h1>
                        <div className="nav-selections">
                            <a className="nav-link" id="nav-item" href="#">Gallery</a>
                            <a className="nav-link" id="nav-item" href="#">Services</a>
                            <a className="nav-link disabled" id="nav-item" href="#">Disabled</a>
                        </div>
                    </nav>
                </div> 
            </div>
        )
    }
}

export default NavBar;