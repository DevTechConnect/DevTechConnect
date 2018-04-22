import React, { Component } from 'react';

import Achievement from '../Achievement/Achievement';

import './MemberInfo.css';

class MemberInfo extends Component {
  
    render() {
        console.log(this.props.userComplTracks)
        
        let complTracks = null;
        
        for (let j = 0; j < this.props.userComplTracks; j++) {
            if (this.props.user.tracks[j].trackMarkedComplete === 1 && this.props.user.tracks[j].trackMarkedComplete !== 0) {
                complTracks = (
                    <div>
                        {this.props.userComplTracks.map((index) => {
                            console.log(this.props.user.tracks)
                                return <Achievement 
                                    trackId={this.props.user.tracks[j].trackId}
                                    key={index} />
                        })}
                    </div>
                );
            }
        }
     
        return (
            <div>
                <h1>Welcome back {this.props.user.firstName}!</h1>
                <p>Member Since: {this.props.user.joinDate.substr(0, 4)}</p>
                {complTracks}
            </div>
        )
    }
}

export default MemberInfo;

