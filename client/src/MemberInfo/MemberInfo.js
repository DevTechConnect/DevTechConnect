import React, { Component } from 'react';

import Achievement from '../Achievement/Achievement';

import './MemberInfo.css';

class MemberInfo extends Component {
  
    render() {
     
        return (
            <div>
                <h1 className='sidebar-user-name'>Welcome back {this.props.user.firstName}!</h1>
                <p className='sidebar-welcome'>Thank You for Being a Member Since: {this.props.user.joinDate.substr(0, 4)}</p>
            </div>
        )
    }
}

export default MemberInfo;

