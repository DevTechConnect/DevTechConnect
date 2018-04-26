import React, { Component } from 'react';
import API from "./utils/API";
import Landing from './Landing/Landing';
import Home from './Home/Home';
import MemberP from './MemberP/MemberP';
import Resources from './Resources/Resources';
import LimitedFocus from './LimitedFocus/LimitedFocus';


import './App.css';

class App extends Component {

    state = {
        page: "Landing",
        firstName: '',
        lastName:'',
        email:'',
        email2:'',
        psw:'',
        psw2:'',
        loginEmail: '',
        loginPass:'',
        user:[],
        allTracks:[],
        relTracks: [],
        allArticles:[],
        userSavedTracks: [],
        userComplTracks: []
    };

    setAppState = (page) => {
        this.setState({
            page: page,
        })
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    };


    handleLoginSubmit = (event) => {
        event.preventDefault();
        API.login({username:this.state.loginEmail, password:this.state.loginPass})
          .then((response) => response)
          .then( (response) => {
              if(response.status!=200){
                //TODO show error cannot log in
                  console.log("UNABLE TO LOGIN. USERNAME AND PASSWORD ARE INCORRECT");
              } else {
                this.setState({user:response.data})
                  console.log(response.data)
            }})
            .then(() => {
                    let complTrackHolder = [];
                    let userTrackHolder = [];
                    let userTrackHolderName = [];
                    for (let i = 0; i < this.state.user.tracks.length; i++) {
                        if (this.state.user.tracks[i].trackMarkedComplete === 1 && this.state.user.tracks[i].trackMarkedComplete !== 0) {
                            console.log("Completed: " + this.state.user.tracks[i].trackId);
                            complTrackHolder.push(this.state.user.tracks[i].trackId);
                        } else {
                            console.log("Incomplete: " + this.state.user.tracks[i].trackId);
                            userTrackHolder.push(this.state.user.tracks[i].trackId);
                            userTrackHolderName.push(this.state.user.tracks[i].trackName);
                        }
                    }
                    this.trialTrackHandler();
                    this.fetchArticlesHandler(0);
                    this.setState({userSavedTracks: userTrackHolder, userComplTracks: complTrackHolder});
                }
            )
        .then(() => {
            this.setState({page:'Home'})
        })
        .catch(err => console.log(err));
    };

    handleSignupSubmit = (event)  => {
        event.preventDefault();
        alert(`Your signup was successful ${this.state.firstName}!`);
        API.addNewUser({firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email, password:this.state.psw})
            .then((response) => {
                this.trialTrackHandler();
                this.fetchArticlesHandler(0);
                this.setState({user:response.data, page:"MemberP"});
             })
            .catch(err => console.log(err));
    };

    trialTrackHandler = () => {
        API.getAllTracks()
          .then( (response) => {
              if(response.status!=200){
                //TODO show error cannot log in
                  console.log("UNABLE TO GET TRACK INFORMATION");
              } else {
                this.setState({allTracks:response.data});
            }})
            .catch(err => console.log(err));
    }
    
    relTrackHandler = (num) => {
        API.getRelatedTracksSummary(num)
        .then( (response) => {
              if(response.status!=200){
                //TODO show error cannot log in
                  console.log("UNABLE TO GET RELATED TRACK INFORMATION");
              } else {
                this.setState({relTracks:response.data});
                console.log(response.data);
            }})
            .catch(err => console.log(err));
    }

    fetchArticlesHandler = (num) => {
        API.getArticles(num)
        .then( (response) => {
              if(response.status!=200){
                //TODO show error cannot log in
                  console.log("UNABLE TO GET INFORMATION");
              } else {
                this.setState({allArticles:response.data});
                  console.log('ALL ARTICLES: ' + response.data);
            }})
            .catch(err => console.log(err));
    };

    memTrackHandler = () => {
        this.state.user.tracks.forEach((i) => {
            console.log("All member tracks: " + i);
        })
    };

  render() {


    return (
        <div className="row">
          <div className='App col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            {
            this.state.page === 'Landing' ?
                <Landing
                    setAppState={this.setAppState}
                    handleInputChange={this.handleInputChange}
                    handleSignupSubmit={this.handleSignupSubmit}
                    handleLoginSubmit={this.handleLoginSubmit}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    email2={this.state.email2}
                    psw={this.state.psw}
                    psw2={this.state.psw2}
                    loginEmail={this.state.loginEmail}
                    loginPass={this.state.loginPass}
                    trialTrackHandler={this.trialTrackHandler}
                    allTracks={this.state.allTracks} 
                    relTrackHandler={this.relTrackHandler} 
                    relTracks={this.state.relTracks} /> : null
            }
            {
            this.state.page === 'Home' ?
                <Home
                    setAppState={this.setAppState}
                    handleInputChange={this.handleInputChange}
                    user={this.state.user}
                    userComplTracks={this.state.userComplTracks}
                    userSavedTracks={this.state.userSavedTracks}
                    allTracks={this.state.allTracks}
                    fetchArticlesHandler={this.fetchArticlesHandler} 
                    relTrackHandler={this.relTrackHandler} 
                    relTracks={this.state.relTracks}/> : null
            }
            {
            this.state.page === 'MemberP' ?
                <MemberP
                    setAppState={this.setAppState}
                    user={this.state.user}
                    userComplTracks={this.state.userComplTracks}
                    userSavedTracks={this.state.userSavedTracks}
                    allTracks={this.state.allTracks}
                    fetchArticlesHandler={this.fetchArticlesHandler} 
                    relTrackHandler={this.relTrackHandler} 
                    relTracks={this.state.relTracks}/> : null
            }
            {
            this.state.page === 'Resources' ?
                <Resources
                    setAppState={this.setAppState}
                    handleInputChange={this.handleInputChange}
                    user={this.state.user}
                    userComplTracks={this.state.userComplTracks}
                    userSavedTracks={this.state.userSavedTracks}
                    allTracks={this.state.allTracks}
                    fetchArticlesHandler={this.fetchArticlesHandler}
                    allArticles={this.state.allArticles} 
                    relTrackHandler={this.relTrackHandler} 
                    relTracks={this.state.relTracks} /> : null
            }
            {
            this.state.page === 'LimitedFocus' ?
                <LimitedFocus
                    setAppState={this.setAppState}
                    handleInputChange={this.handleInputChange}
                    user={this.state.user}
                    allTracks={this.state.allTracks}
                    fetchArticlesHandler={this.fetchArticlesHandler} 
                    relTrackHandler={this.relTrackHandler} 
                    relTracks={this.state.relTracks}/> : null
            }
          </div>
        </div>
    );
  }
}

export default App;
