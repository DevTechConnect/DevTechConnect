import React, { Component } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Landing from './Landing/Landing';


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
        <Landing 
            setAppState={this.handleHolderPage}
        />
      </div>
    );
  }
}

export default App;
