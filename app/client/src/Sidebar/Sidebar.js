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
        
        let savedTracks = null;
        
        if (this.props.user.tracks) {
            for (let j = 0; j < this.props.user.tracks.length; j++) {
                savedTracks = (
                    <div>
                        {this.props.user.tracks.map((index) => {
                            console.log(this.props.user.tracks)
                            return <TrackQV 
                                    trackId={this.props.user.tracks[j].trackId}
                                    imgDim={75} 
                                    key={index} />
                        })}
                    </div>
                );
            }
        }
        
        return (
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 inline-block sidebar">
                <MemberInfo 
                    user={this.props.user} 
                    userComplTracks={this.props.userComplTracks}
                    userSavedTracks={this.props.userSavedTracks} />
                <h4>Jump into one of your saved tracks:</h4>
                {savedTracks}
                <h4>These are your last 3 bookmarked articles.</h4>
                <Article />
                <Article />
                <Article />
            </div>
        )
    }
};

export default Sidebar;