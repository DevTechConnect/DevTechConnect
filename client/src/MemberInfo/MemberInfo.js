import React from 'react';

import './MemberInfo.css';

const MemberInfo = props =>  {
  
    return (
        <div>
            <h1 className='sidebar-user-name'>Welcome back {props.user.firstName}!</h1>
            <p className='sidebar-welcome'>Thank You for Being a Member Since: {props.user.joinDate.substr(0, 4)}</p>
        </div>
    )
}

export default MemberInfo;

