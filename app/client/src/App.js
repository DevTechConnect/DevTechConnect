import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    axios.get('/')
      .then(res => {console.log(res); return res.json();})
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
