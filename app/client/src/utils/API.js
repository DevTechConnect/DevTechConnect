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
  }

};
