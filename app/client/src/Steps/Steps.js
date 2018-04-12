import React from 'react';
import { Link } from "react-router-dom";

const Steps = (props) => {
    return (
        <ul className="nav nav-tabs">
            <li className={window.location.pathname === "/LangDef" ? "active" : ""}>
                <Link to="/LangDef">Definition</Link>
            </li>
            <li className={window.location.pathname === "/Step1" ? "active" : ""}>
                <Link to="/Step1">Step 1</Link>
            </li>
            <li className={window.location.pathname === "/Step2" ? "active" : ""}>
                <Link to="/Step2">Step 2</Link>
            </li>
            <li className={window.location.pathname === "/Step3" ? "active" : ""}>
                <Link to="/Step3">Step 3</Link>
            </li>
            <li className={window.location.pathname === "/Step4" ? "active" : ""}>
                <Link to="/Step4">Step 4</Link>
            </li>
            <li className={window.location.pathname === "/practice" ? "active" : ""}>
                <Link to="/practice">Practice Links</Link>
            </li>
            <li className={window.location.pathname === "/NextTrack" ? "active" : ""}>
                <Link to="/NextTrack">Next Track</Link>
            </li>
          </ul>
    )
};

export default Steps;


