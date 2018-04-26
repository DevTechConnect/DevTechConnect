import React, { Component } from 'react';

import Link from '../Link/Link';
import Info from '../Info/Info';

import './Practice.css';

class Practice extends Component {
    
     state={
        allTracks: this.props.allTracks
    }
    
    render() {   
        
        return (
            <div>
                <h1 className='content-header'>Practice Links</h1>
                <div className='pract-link'>
                    <Info 
                        info={this.state.allTracks[0].steps[8].stepdescription} />
                    <Link 
                        link={this.state.allTracks[0].steps[8].stepLink} />
                    <hr />
                </div>
                <div className='pract-link'>
                    <Info 
                        info={this.state.allTracks[0].steps[9].stepdescription} />
                    <Link 
                        link={this.state.allTracks[0].steps[9].stepLink} />
                    <hr />
                </div>
                <div className='pract-link'>
                    <Info 
                        info={this.state.allTracks[0].steps[10].stepdescription} />
                    <Link 
                        link={this.state.allTracks[0].steps[10].stepLink} />
                    <hr />
                </div>
                <div className='pract-link'>
                    <Info 
                        info={this.state.allTracks[0].steps[11].stepdescription} />
                    <Link 
                        link={this.state.allTracks[0].steps[11].stepLink} />
                    <hr />
                </div>
                <div className='pract-link'>
                    <Info 
                        info={this.state.allTracks[0].steps[12].stepdescription} />
                    <Link 
                        link={this.state.allTracks[0].steps[12].stepLink} />
                    <hr />
                </div>
                <div className='pract-link'>
                    <Info 
                        info={this.state.allTracks[0].steps[13].stepdescription} /> 
                    <Link 
                        link={this.state.allTracks[0].steps[13].stepLink} />
                </div>
            </div>
        )
    }
};

export default Practice;