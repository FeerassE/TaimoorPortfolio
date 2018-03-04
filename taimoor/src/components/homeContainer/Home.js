import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPhotos, fetchHomePhoto } from '../../actions/index';
import { bindActionCreators } from 'redux';

class Home extends Component {

    displayFetchPhotosObject(){
        console.log(this.props)
    }

    renderHomePage(){

    for(var key in this.props.homephoto){
       if ( key == "image_url" ){
           const backgroundStyle = {
               background: `url(${this.props.homephoto.image_url})`,
               backgroundSize: '120% auto cover',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center center'

           }
           return (
            <div className="homeWrapper">
                <div className="homeBackground" style={backgroundStyle}>
                    {/* <div className="trimHomePageImg">
                        <img className="homeImg" src={`${this.props.homephoto.image_url}`} />
                    </div> */}
                </div>
            </div>
        )
       }
    } 
    }

render() {
    return ( 
        <div onClick={this.displayFetchPhotosObject.bind(this)}>
            {this.renderHomePage()}
        </div>
    )
}

}

function mapStateToProps(state) {
    return { 
        photos: state.photos,
        homephoto: state.homephoto.homephoto,
        window: state.window,
    };
}

export default connect(mapStateToProps, { fetchPhotos, fetchHomePhoto })(Home);