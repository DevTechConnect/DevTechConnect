import React, { Component } from 'react';
import API from "./utils/API";
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Landing from './Landing/Landing';
import Home from './Home/Home';
import MemberP from './MemberP/MemberP';
import AllTracks from './AllTracks/AllTracks';
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
        userSavedTracks:[],
        userComplTracks:[],
        allTracks:[]
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


    handleSignupSubmit = (event)  => {
        event.preventDefault();
        alert(`Your signup was successful ${this.state.firstName}!`);
        API.addNewUser({firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email, password:this.state.psw})
            .then((response) => {
                this.setState({user:response.data, page:"MemberP"});
             })
            .catch(err => console.log(err));
    };

    handleLoginSubmit = (event) => {
        event.preventDefault();
        API.login({username:this.state.loginEmail, password:this.state.loginPass})
          .then( (response) => {
              if(response.status!=200){
                //TODO show error cannot log in
                  console.log("UNABLE TO LOGIN. USERNAME AND PASSWORD ARE INCORRECT");
              } else {
                this.setState({user:response.data})
            }})
            .then(() => { 
                let complTrackHolder = [];
                let userTrackHolder = [];
                for (let i = 0; i < this.state.user.tracks.length; i++) {
                    if (this.state.user.tracks[i].trackMarkedComplete === 1 && this.state.user.tracks[i].trackMarkedComplete !== 0) {
                        console.log("Completed: " + this.state.user.tracks[i].trackId);
                        complTrackHolder.push(this.state.user.tracks[i].trackId);
                    } else {
                        console.log("Incomplete: " + this.state.user.tracks[i].trackId);
                        userTrackHolder.push(this.state.user.tracks[i].trackId);
                    }
                }
                this.trialTrackHandler();
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
                  console.log(this.state.allTracks);
            }})
            .catch(err => console.log(err));
    }

    memTrackHandler = () => {
        this.state.user.tracks.forEach((i) => {
            console.log(i);
        })
    }

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
                    allTracks={this.state.allTracks} /> : null
            }
            {
            this.state.page === 'Home' ?
                <Home
                    setAppState={this.setAppState}
                    handleInputChange={this.handleInputChange}
                    user={this.state.user}
                    userComplTracks={this.state.userComplTracks}
                    userSavedTracks={this.state.userSavedTracks}  
                    allTracks={this.state.allTracks} /> : null
            }
            {
            this.state.page === 'MemberP' ?
                <MemberP
                    setAppState={this.setAppState}
                    user={this.state.user}  
                    userComplTracks={this.state.userComplTracks}
                    userSavedTracks={this.state.userSavedTracks}  
                    allTracks={this.state.allTracks} /> : null
            }
            {
            this.state.page === 'AllTracks' ?
                <AllTracks
                    setAppState={this.setAppState}
                    handleInputChange={this.handleInputChange}
                    user={this.state.user}  
                    userComplTracks={this.state.userComplTracks}
                    userSavedTracks={this.state.userSavedTracks}  
                    allTracks={this.state.allTracks} /> : null
            }
            {
            this.state.page === 'LimitedFocus' ?
                <LimitedFocus
                    setAppState={this.setAppState}
                    handleInputChange={this.handleInputChange}
                    user={this.state.user}  
                    allTracks={this.state.allTracks} /> : null
            }
          </div>
        </div>
    );
  }
}

export default App;
