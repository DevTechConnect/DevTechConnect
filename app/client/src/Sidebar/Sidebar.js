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
        console.log(this.props.userSavedTracks)
        
   
     
        
        if (this.props.user.tracks) {
            savedTracks = (
                <div>
                    {this.props.user.tracks.map((user, index) => {
                     if (this.props.user.tracks[index].trackMarkedComplete === 0 && this.props.user.tracks[index].trackMarkedComplete !== 1 && index < 3) {
                        return <TrackQV 
                            trackId={this.props.user.tracks[index].trackId}
                            imgDim={75}
                            trackName={this.props.user.tracks[index].trackName}
                            key={index} />
                }
                    })}
                </div>
            );
        }
        
        let articles = null;

        if (this.props.user.bookmarks) {
            articles = (
                <div>
                    {this.props.user.bookmarks.map((user, index) => {
                        console.log(this.props.user.bookmarks)
                        return <Article 
                            artName={this.props.user.bookmarks[index].linkName}
                            key={index} />
                    })}
                </div>
            );
        }
     
        
        return (
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 inline-block sidebar">
                <MemberInfo 
                    user={this.props.user} 
                    userComplTracks={this.props.userComplTracks}
                    userSavedTracks={this.props.userSavedTracks} />
                <h4>Jump into one of your saved tracks:</h4>
                {savedTracks}
                <h4>These are your last 3 bookmarked articles.</h4>
                {articles}
            </div>
        )
    }
};

export default Sidebar;