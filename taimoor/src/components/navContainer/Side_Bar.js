import React,{ Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

class SideBar extends Component {
    render(){
        return (
                <div className="side-bar">
                    <div className="side-bar-container">
                        <h1 id="side-bar-title-taimoor"> Taimoor Khan </h1>
                        <div className="side-bar-selections">
                            <ul className="side-bar-list">
                                <li className="side-bar-link">
                                    <a  href="#">Home</a>
                                </li>
                                <li className="side-bar-link">
                                    <a  href="#">Gallery</a>
                                </li>
                                <li className="side-bar-link">
                                    <a  href="#">Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
        )
    }
}
export default SideBar;