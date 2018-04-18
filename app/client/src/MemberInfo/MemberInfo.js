import React from 'react';

import './MemberInfo.css';

const MemberInfo = (props) => {
      
    return (
        <div>
            <h1>Welcome back {props.user.firstName}!</h1>
            <p>Member Since: {props.user.joinDate.substr(0, 4)}</p>
            <p>Tracks Completed: {props.user.tracks}</p>
        </div>
    )
}
        
export default MemberInfo;