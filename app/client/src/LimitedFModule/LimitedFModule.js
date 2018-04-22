import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LangDef from '../LangDef/LangDef';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import Step4 from '../Step4/Step4';
import Practice from '../Practice/Practice';
import RelTrack from '../RelTrack/RelTrack';


import './LimitedFModule.css';

class LimitedFModule extends Component {
    
    state = {
        startClick: false,
        trackName: 'HTML/CSS',
        page: 'LangDef'
    };

    startClickHandler = () => {
        const startClkd = this.state.startClick;
        this.setState({startClick: !startClkd});
    }
    
    trackNameHandler = () => {
        let selectedTrack = '';
        this.setState({trackName: selectedTrack})
    }
    langDefHandler = () => {
        this.setState({page: 'LangDef'})
    }
    step1Handler = () => {
        this.setState({page: 'Step1'})
    }
    step2Handler = () => {
        this.setState({page: 'Step2'})
    }
    step3Handler = () => {
        this.setState({page: 'Step3'})
    }
    step4Handler = () => {
        this.setState({page: 'Step4'})
    }
    practiceHandler = () => {
        this.setState({page: 'Practice'})
    }
    relTrackHandler = () => {
        this.setState({page: 'RelTrack'})
    }

    render () {
        return (
            <div className='track-box'>
                <ul className="nav nav-tabs">
                    <li className='tab-title' onClick={this.langDefHandler}>Language Definition</li>
                    <li className='tab-title' onClick={this.step1Handler}>Step 1</li>
                    <li className='tab-title' onClick={this.step2Handler}>Step 2</li>
                    <li className='tab-title' onClick={this.step3Handler}>Step 3</li>
                    <li className='tab-title' onClick={this.step4Handler}>Step 4</li>
                    <li className='tab-title' onClick={this.practiceHandler}>Practice</li>
                    <li className='tab-title' onClick={this.relTrackHandler}>Related Tracks</li>
                </ul>
                <div className='track-content-box'>
                    {
                    this.state.page === 'LangDef' ?
                        <LangDef /> : null
                    }
                    {
                    this.state.page === 'Step1' ?
                        <Step1 /> : null
                    }
                    {
                    this.state.page === 'Step2' ?
                        <Step2 /> : null
                    }
                    {
                    this.state.page === 'Step3' ?
                        <Step3 /> : null
                    }
                    {
                    this.state.page === 'Step4' ?
                        <Step4 /> : null
                    }
                    {
                    this.state.page === 'Practice' ?
                        <Practice /> : null
                    }
                    {
                    this.state.page === 'RelTrack' ?
                        <RelTrack /> : null
                    }
                </div>
            </div>
        )
    }
};

export default LimitedFModule;


