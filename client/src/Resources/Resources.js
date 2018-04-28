import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Article from '../Article/Article';
import RecTracks from '../RecTracks/RecTracks';
import GlosTermComp from '../GlosTermComp/GlosTermComp';
import LimitedFModule from '../LimitedFModule/LimitedFModule';

import './Resources.css';

class Home extends Component {

    state= {
        startTrackClkd: false,
        startTrack: false,
        selTrackId: 0,
        resClkd: true
    }

    startTrkClickHandler = (e, id) => {
        const startClkd = this.state.startTrackClkd;
        this.setState({
            startTrackClkd: !startClkd,
            selTrackId: id-1,
            resClkd: false
        });
        console.log(id);
    };

    startNowClickHandler = () => {
        const startNowClkd = this.state.startTrack;
        this.setState({
            startTrack: !startNowClkd,
            resClkd: false
        });
    };

    resClickedStateHandler = () => {
        this.setState({
            resClkd: true,
            startTrackClkd: false,
            startTrack: false
        });
    };

    memClickHandler = () => {
        this.props.setAppState("MemberP")
    }

    resourceClickHandler = () => {
        this.props.setAppState("Resources");
        this.resClickedStateHandler();
    }

    homeClickHandler = () => {
        this.props.setAppState("Home")
    }

    startTrackHandler = () => {
        this.props.setAppState("LimitedFocus")
    }

    render () {

        let articles = null;
        if (this.props.allArticles) {
            articles = (
                <div>
                    <div id='top'>
                        <ul>
                            <a className='cat-sel' href='#clAndTur'><li>Classes and Tutorials</li></a>
                            <a className='cat-sel' href='#datAndPlat'><li>Databases and Platforms</li></a>
                            <a className='cat-sel' href='#framAndLib'><li>Frameworks and Libraries</li></a>
                            <a className='cat-sel' href='#jobAndCar'><li>Job Hunting and Career Resources</li></a>
                            <a className='cat-sel' href='#npmPack'><li>NPM Packages</li></a>
                            <a className='cat-sel' href='#projManAndCom'><li>Project Management and Communication</li></a>
                            <a className='cat-sel' href='#othMis'><li>Other/Misc</li></a>
                        </ul>
                    </div>
                    <div>
                        <h3 className='cat-title' id='clAndTur'>Classes and Tutorials</h3>
                        {this.props.allArticles.map((p, index) => {
                         if (this.props.allArticles[index].topicName === 'Classes and Tutorials') {
                            return <div>
                                        <Article
                                        artName={this.props.allArticles[index].linkName}
                                        link={this.props.allArticles[index].url}
                                        descr={this.props.allArticles[index].linkDescription}
                                        key={index} />
                                        <a className='cat-sel' href='#top'>Back to Top</a>
                                        <hr />
                                    </div>
                            }
                        })}
                    </div>
                    <div>
                        <h3 className='cat-title' id='datAndPlat'>Databases and Platforms</h3>
                        {this.props.allArticles.map((p, index) => {
                         if (this.props.allArticles[index].topicName === 'Databases and Platforms') {
                            return <div>
                                        <Article
                                        artName={this.props.allArticles[index].linkName}
                                        link={this.props.allArticles[index].url}
                                        descr={this.props.allArticles[index].linkDescription}
                                        key={index} />
                                        <a className='cat-sel' href='#top'>Back to Top</a>
                                        <hr />
                                    </div>
                            }
                        })}
                    </div>
                    <div>
                        <h3 className='cat-title' id='framAndLib'>Frameworks and Libraries</h3>
                        {this.props.allArticles.map((p, index) => {
                         if (this.props.allArticles[index].topicName === 'Frameworks and Libraries') {
                            return <div>
                                        <Article
                                        artName={this.props.allArticles[index].linkName}
                                        link={this.props.allArticles[index].url}
                                        descr={this.props.allArticles[index].linkDescription}
                                        key={index} />
                                        <a className='cat-sel' href='#top'>Back to Top</a>
                                        <hr />
                                    </div>
                            }
                        })}
                    </div>
                    <div>
                        <h3 className='cat-title' id='jobAndCar'>Job Hunting and Career Resources</h3>
                        {this.props.allArticles.map((p, index) => {
                         if (this.props.allArticles[index].topicName === 'Job Hunting and Career Resources') {
                            return <div>
                                        <Article
                                        artName={this.props.allArticles[index].linkName}
                                        link={this.props.allArticles[index].url}
                                        descr={this.props.allArticles[index].linkDescription}
                                        key={index} />
                                        <a className='cat-sel' href='#top'>Back to Top</a>
                                        <hr />
                                    </div>
                            }
                        })}
                    </div>
                    <div>
                        <h3 className='cat-title' id='npmPack'>NPM Packages</h3>
                        {this.props.allArticles.map((p, index) => {
                         if (this.props.allArticles[index].topicName === 'NPM Packages') {
                            return <div>
                                        <Article
                                        artName={this.props.allArticles[index].linkName}
                                        link={this.props.allArticles[index].url}
                                        descr={this.props.allArticles[index].linkDescription}
                                        key={index} />
                                        <a className='cat-sel' href='#top'>Back to Top</a>
                                        <hr />
                                    </div>
                            }
                        })}
                    </div>
                    <div>
                        <h3 className='cat-title' id='projManAndCom'>Project Management and Communication</h3>
                        {this.props.allArticles.map((p, index) => {
                         if (this.props.allArticles[index].topicName === 'Project Management and Communication') {
                            return <div>
                                        <Article
                                        artName={this.props.allArticles[index].linkName}
                                        link={this.props.allArticles[index].url}
                                        descr={this.props.allArticles[index].linkDescription}
                                        key={index} />
                                        <a className='cat-sel' href='#top'>Back to Top</a>
                                        <hr />
                                    </div>
                            }
                        })}
                    </div>
                    <div>
                        <h3 className='cat-title' id='othMis'>Other/Misc</h3>
                        {this.props.allArticles.map((p, index) => {
                         if (this.props.allArticles[index].topicName === 'Other/Misc') {
                            return <div>
                                        <Article
                                        artName={this.props.allArticles[index].linkName}
                                        link={this.props.allArticles[index].url}
                                        descr={this.props.allArticles[index].linkDescription}
                                        key={index} />
                                        <a className='cat-sel' href='#top'>Back to Top</a>
                                        <hr />
                                    </div>
                            }
                        })}
                    </div>
            </div>
            );
        };

        let glosTerms = null;

        if (this.props.allGloss) {
            glosTerms = (
                <div>
                    {this.props.allGloss.map((t, index) => {
                        return <div id='glos-top'>
                                    <li>
                                        <GlosTermComp
                                            term={this.props.allGloss[index].term}
                                            def={this.props.allGloss[index].definition}
                                            key={index} />
                                    </li>
                                    <a className='cat-sel' href='#glos-top'>Back to Top</a>
                                    <hr />
                                </div>
                    })}
                </div>
            );
        }

    return (
        <div>
            {
            this.state.startTrackClkd === false && this.state.resClkd === true ?
                <div>
                    <Navbar
                        memClickHandler={this.memClickHandler}
                        resourceClickHandler={this.resourceClickHandler}
                        homeClickHandler={this.homeClickHandler} />
                    <div>
                        <Sidebar
                            user={this.props.user}
                            userComplTracks={this.props.userComplTracks}
                            userSavedTracks={this.props.userSavedTracks}
                            allTracks={this.props.allTracks} />
                        <div className='home-box'>
                            <h1 className='page-head'>DevTech Connect Resources</h1>
                            <br />
                                <h2 className='mem-p-second'>Browse Our Links and Articles</h2>
                                <div className='res-article-holder'>
                                    {articles}
                                </div>
                            <div className='glos-box'>
                                <h2 className='mem-p-second'>Glossary</h2>
                                    <div className='glos-holder'>
                                        <ul>
                                            {glosTerms}
                                        </ul>
                                    </div>
                            </div>
                             <div className='inline-block'>
                                <div>
                                    <RecTracks
                                        startTrackHandler={this.startTrackHandler}
                                        allTracks={this.props.allTracks}
                                        startTrkClickHandler={this.startTrkClickHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null
        }
        {
        this.state.startTrackClkd && this.state.resClkd === false ?
                <div>
                    <Navbar
                        memClickHandler={this.memClickHandler}
                        resourceClickHandler={this.resourceClickHandler}
                        homeClickHandler={this.homeClickHandler}
                        fetchArticlesHandler={this.fetchArticlesHandler} />
                    {
                    this.state.startTrack === false ?
                        <div className='land-box'>
                            <h1>Limited Focus Track</h1>
                            <div>
                                <h2>
                                    Welcome to your {this.state.trackName} learning track.
                                </h2>
                                <p>
                                    Follow along and check off each step you complete to track of your progress. Most importantly, don't skip the practice; practice will be your quickest teacher in code. We will give you achievements along the way - you can find those on your <span className='link' onClick={this.memClickHandler}>Member Page</span>. 
                                </p>
                                <p>
                                    We're' happy you're here. Stick around, and like always, keep moving.
                                </p>
                                <button type='button' name='startButton' onClick={this.startNowClickHandler}>
                                    Start Track
                                </button>
                            </div>
                        </div> : null
                    }
                    {
                    this.state.startTrack && this.state.resClkd === false ?
                        <div className='land-box'>
                            <LimitedFModule
                                allTracks={this.props.allTracks}
                                trackId={this.state.selTrackId}
                                relTrackHandler={this.props.relTrackHandler}
                                relTracks={this.props.relTracks} />
                        </div> : null
                    }
                </div> : null
        }
    </div>
    )
    }
};

export default Home;
