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

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
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
