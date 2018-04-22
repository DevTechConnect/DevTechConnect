import React, { Component } from 'react';

import Achievement from '../Achievement/Achievement';

import './MemberInfo.css';

class MemberInfo extends Component {
  
    render() {
        
        let complTracks = null;
        
        for (let j = 0; j < this.props.userComplTracks; j++) {
            if (this.props.userComplTracks) {
                complTracks = (
                    <div>
                        {this.props.userComplTracks.map((index) => {
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

