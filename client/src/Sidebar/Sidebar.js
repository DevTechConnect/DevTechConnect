import React, { Component } from 'react';

import Achievement from '../Achievement/Achievement';
import MemberInfo from '../MemberInfo/MemberInfo';
import TrackQV from '../TrackQV/TrackQV';
import Article from '../Article/Article';

import './Sidebar.css';

class Sidebar extends Component {
    
    render() {
        
        let complTracks = null;
        
        if (this.props.userComplTracks) {
                complTracks = (
                    <div>
                        {this.props.userComplTracks.map((person, index) => {
                            return <Achievement 
                                trackId={this.props.userComplTracks[index]}
                                key={index} />
                        })}
                    </div>
                );
        }
        
        let savedTracks = null;

        if (this.props.userSavedTracks) {
                savedTracks = (
                    <div>
                        {this.props.userSavedTracks.map((person, index) => {
                            return <TrackQV 
                                trackId={this.props.user.tracks[index].trackId}
                                trackName={this.props.user.tracks[index].trackName}
                                userSavedTracks={this.props.userSavedTracks}
                                startTrkClickHandler={this.props.startTrkClickHandler}
                                key={index} />
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
                    userSavedTracks={this.props.userSavedTracks} />
                <h4 className='sidebar-head'>Your completed tracks:</h4>
                {complTracks}
                <hr />
                <h4 className='sidebar-head'>Jump into one of your saved tracks:</h4>
                <hr />
                {savedTracks}
                <hr />
                <h4 className='sidebar-head'>These are your last 3 bookmarked articles.</h4>
                <hr />
                <div className='art-holder'>
                    {articles}
                </div>
            </div>
        )
    }
};

export default Sidebar;