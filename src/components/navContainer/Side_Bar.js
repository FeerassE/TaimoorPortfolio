import React,{ Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

class SideBar extends Component {
    render(){
        return (
                <div className="side-bar">
                    <div className="side-bar-container">
                        <h1 id="side-bar-title-taimoor"> Taimoor Khan </h1>
                        <h3 id="side-bar-subtitle-photograph"> Photography </h3>
                        <div className="side-bar-selections">
                            <ul className="side-bar-list">
                            <a  href="/" className="side-bar-link">
                                    Home
                                </a>
                                <a  href="gallery" className="side-bar-link">
                                    Gallery
                                </a>
                                {/* <a  href="#" className="side-bar-link">
                                    Services
                                </a> */}
                            </ul>
                        </div>
                    </div>
                </div> 
        )
    }
}
export default SideBar;