import React from 'react';

const Steps = (props) => {
    render(
        <ul className="nav nav-tabs">
            <li className={window.location.pathname === "/Step1" ? "active" : ""}>
                <Link to="/">Step 1</Link>
            </li>
            <li className={window.location.pathname === "/Step2" ? "active" : ""}>
                <Link to="/about">Step 2</Link>
            </li>
            <li className={window.location.pathname === "/Step3" ? "active" : ""}>
                <Link to="/blog">Step 3</Link>
            </li>
            <li className={window.location.pathname === "/Step4" ? "active" : ""}>
                <Link to="/contact">Step 4</Link>
            </li>
            <li className={window.location.pathname === "/practice" ? "active" : ""}>
                <Link to="/contact/learn">Practice Links</Link>
            </li>
            <li className={window.location.pathname === "/next" ? "active" : ""}>
                <Link to="/contact/learn">Next Track</Link>
            </li>
          </ul>
    )
};

export default Steps;