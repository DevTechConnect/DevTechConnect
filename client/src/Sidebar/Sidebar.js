import React, { Component } from 'react';

import Achievement from '../Achievement/Achievement';
import MemberInfo from '../MemberInfo/MemberInfo';
import TrackQV from '../TrackQV/TrackQV';
import Article from '../Article/Article';

import './Sidebar.css';

class Sidebar extends Component {
    
    render() {
        
        let savedTracks = null;
        console.log('user saved tracks: ' + this.props.userSavedTracks)
        
   
     
        
        if (this.props.user.tracks) {
            savedTracks = (
                <div>
                    {this.props.user.tracks.map((user, index) => {
                     if (this.props.user.tracks[index].trackMarkedComplete === 0 && this.props.user.tracks[index].trackMarkedComplete !== 1) {
                        return <TrackQV 
                            trackId={this.props.user.tracks[index].trackId}
                            imgDim={75}
                            trackName={this.props.user.tracks[index].trackName}
                            key={index} 
                            allTracks={this.props.allTracks} />
                }
                    })}
                </div>
            );
        }
        
        let articles = null;
        
        if (this.props.user.bookmarks) {
            let bookmarks = this.props.user.bookmarks.slice(0, 3);
            articles = (
                <div>
                    {bookmarks.map((p, index) => {
                        console.log('user bookmarks: '+ this.props.user.bookmarks)
                        return <Article 
                            artName={this.props.user.bookmarks[index].linkName}
                            link={this.props.user.bookmarks[index].url}
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
                <hr />
                <h4 className='sidebar-head'>Jump into one of your saved tracks:</h4>
                <hr />
                {savedTracks}
                <hr />
                <h4 className='sidebar-head'>These are your last 3 bookmarked articles.</h4>
                <hr />
                {articles}
            </div>
        )
    }
};

export default Sidebar;