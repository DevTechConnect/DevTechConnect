import React, { Component } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Landing from './Landing/Landing';
import Home from './Home/Home';


import './App.css';

class App extends Component {

  state = {
    page: "Landing"
  };

    handleHolderPage = (page) => {
        this.setState({
            page: page
        })
    }

  render() {
    return (
      <div className="App">
        {
            this.state.page === 'Landing' ?
        <Landing
            setAppState={this.handleHolderPage} /> : null
        }
        {
            this.state.page === 'Home' ?
        <Home
            setAppState={this.handleHolderPage} /> : null
        }
        {
            this.state.page === 'MemberP' ?
        <Home
            setAppState={this.handleHolderPage} /> : null
        }
      </div>
    );
  }
}

export default App;
