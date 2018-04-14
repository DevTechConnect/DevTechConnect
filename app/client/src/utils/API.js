import axios from "axios";

export default {

    addNewUser: function(newUser) {
        return axios.post("/api/addUser", newUser);
    },

    login: function(credentials) {
        return axios.post("/api/login", credentials);
    }
};

