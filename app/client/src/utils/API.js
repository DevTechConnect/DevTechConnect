import axios from "axios";

export default {

    addNewUser: function(newUser) {
        return axios.post("/api/addUser", newUser);
    },

    getAllTracks: function() {
      var results = axios.get("/api/getAllTracks");
      console.log("ALL TRACKS "+results);
      return results;
    },

    login: function(credentials) {
      console.log("LOGGING IN");
      var results = axios.post("/api/login", credentials);
      console.log("RESULTS "+results);
      return results;
    },

    logout: function(){
      console.log("LOGGING OUT");
      return axios.post("/api/logout");
    },
    markStepComplete: function(data) {
      //dataformat: {stepnumber:stepnumber, completedSteps:completedSteps, membertrackId:membertrackId}
      console.log("Marking Complete");
      return axios.post("/api/markStepComplete", data);
    },
    markStepIncomplete: function(data) {
      //dataformat: {stepnumber:stepnumber, completedSteps:completedSteps, membertrackId:membertrackId}
      console.log("Marking Incomplete");
      return axios.post("/api/markStepIncomplete", data);
    }
};
