import React, { Component } from 'react';

import Link from '../Link/Link';
import Info from '../Info/Info';
import Type from '../Type/Type';
import Duration from '../Duration/Duration';

import './Practice.css';

class Practice extends Component {
    
     state={
        allTracks: this.props.allTracks
    }
    
    render() {   
        
        return (
            <div>
                <h1 className='content-header'>Practice Links</h1>
                <hr />
                <div className='pract-link'>
                    <Link 
                        link={this.state.allTracks[0].steps[8].stepLink} />
                    <Info 
                        info={this.state.allTracks[0].steps[8].stepdescription} />
                    <hr />
                </div>
                <div className='pract-link'>
                    <Link 
                        link={this.state.allTracks[0].steps[9].stepLink} />
                    <Info 
                        info={this.state.allTracks[0].steps[9].stepdescription} />
                    <hr />
                </div>
                <div className='pract-link'>
                    <Link 
                        link={this.state.allTracks[0].steps[10].stepLink} />
                    <Info 
                        info={this.state.allTracks[0].steps[10].stepdescription} />
                    <hr />
                </div>
                <div className='pract-link'>
                    <Link 
                        link={this.state.allTracks[0].steps[11].stepLink} />
                    <Info 
                        info={this.state.allTracks[0].steps[11].stepdescription} />
                    <hr />
                </div>
                <div className='pract-link'>
                    <Link 
                        link={this.state.allTracks[0].steps[12].stepLink} />
                    <Info 
                        info={this.state.allTracks[0].steps[12].stepdescription} />
                    <hr />
                </div>
                <div className='pract-link'>
                    <Link 
                        link={this.state.allTracks[0].steps[13].stepLink} />
                    <Info 
                        info={this.state.allTracks[0].steps[13].stepdescription} /> 
                </div>
            </div>
        )
    }
};

export default Practice;