import axios from "axios";

export default {
  addNewUser: function(newUser) {
    let response = fetch('/api/addUser', {
      method: 'POST',
      headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
               },
      body: JSON.stringify(newUser)
    });
    return response;
  },

  login: function(credentials) {
    console.log(JSON.stringify(credentials));
    let response = fetch('/api/login', {
      method: 'POST',
      headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
               },
      body: JSON.stringify(credentials)
    });
    return response;
  }

};
