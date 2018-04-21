import React, { Component } from 'react';

import Achievement from '../Achievement/Achievement';

import './MemberInfo.css';

class MemberInfo extends Component {
  
    render() {
        console.log(this.props.userComplTracks)
        
        let complTracks = null;
        
        if (this.props.userComplTracks && this.props.userComplTracks.length > 0) {
            complTracks = (
                <div>
                    {this.props.userComplTracks.map((index) => {
                        for (let i = 0; i < this.props.userComplTracks.length; i++ ) {
                            return <Achievement 
                                trackNum={1}
                                key={index} />
                        }
                    })}
                </div>
            );
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
