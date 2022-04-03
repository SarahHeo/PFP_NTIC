const axios = require("axios");

const USER_BASE_URL = 'http://192.168.0.9:8080/user';

class UserService {

    getUserFavPicto(userId){
        return axios.get(USER_BASE_URL + "/" + userId + "/favpicto");
    }

    addFavSentence(userId, pictoArray){
        return axios.post(USER_BASE_URL + "/" + userId + "/favsentence", pictoArray);
    }

    getFavSentences(userId){
        return axios.get(USER_BASE_URL + "/" + userId + "/favsentence");
    }
}

export default new UserService();