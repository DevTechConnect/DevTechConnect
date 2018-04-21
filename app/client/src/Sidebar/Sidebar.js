import React, { Component } from 'react';

import Achievement from '../Achievement/Achievement';
import MemberInfo from '../MemberInfo/MemberInfo';
import TrackQV from '../TrackQV/TrackQV';
import Article from '../Article/Article';

import './Sidebar.css';

class Sidebar extends Component {
    
//    let lastThreeTracks = null;
//        
//    if (this.props.userComplTracks.length > 0) {
//        lastTrack = (
//            <div>
//                {this.props.userComplTracks.map((index) => {
//                    for (let i = 0; i < this.props.userComplTracks.length; i++ ) {
//                        return <Achievement 
//                            trackNum={1}
//                            key={index} />
//                    }
//                })}
//            </div>
//        );
//    }      
    
    render() {
        return (
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 inline-block sidebar">
                <MemberInfo 
                    user={this.props.user} 
                    userComplTracks={this.props.userComplTracks}
                    userSavedTracks={this.props.userSavedTracks} />
                <h4>This is the last track you were working on.</h4>
                <TrackQV 
                    user={this.props.user} 
                    imgDim={100} />
                <h4>Jump into one of your saved tracks:</h4>
                <TrackQV 
                    imgDim={75} />
                <TrackQV 
                    imgDim={75} />
                <TrackQV 
                    imgDim={75} />
                <h4>These are your last 3 bookmarked articles.</h4>
                <Article />
                <Article />
                <Article />
            </div>
        )
    }
};

export default Sidebar;