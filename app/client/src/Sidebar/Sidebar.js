import React from 'react';

import Achievement from '../Achievement/Achievement';
import MemberInfo from '../MemberInfo/MemberInfo';
import TrackQV from '../TrackQV/TrackQV';
import Article from '../Article/Article';

import './Sidebar.css';

const Sidebar = (props) => {
    return (
        <div className="inline-block">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <h1>This is the side bar</h1>
                <h4>This is the member information.</h4>
                <MemberInfo 
                    user={props.user} />
                <h4>This is the last track you were working on.</h4>
                <TrackQV />
                <h4>These are your 3 latest tracks</h4>
                <TrackQV />
                <h4>These are your last 5 achievements.</h4>
                <Achievement />
                <h4>These are your last 3 bookmarked articles.</h4>
                <Article />
            </div>
        </div>
    )
};

export default Sidebar;