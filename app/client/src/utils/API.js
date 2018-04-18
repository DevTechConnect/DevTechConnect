import axios from "axios";

export default {

    addNewUser: function(newUser) {
        return axios.post("/api/addUser", newUser);
    },

    login: function(credentials) {
      console.log("LOGGING IN");
      var results = axios.post("/api/login", credentials);
      console.log("RESULTS "+results);
      return results;
    }
};
