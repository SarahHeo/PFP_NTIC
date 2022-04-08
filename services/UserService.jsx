const axios = require("axios");

const USER_BASE_URL = 'http://192.168.0.9:8080/user';

class UserService {

    getUserFavPicto(userId){
        return axios.get(USER_BASE_URL + "/" + userId + "/favpicto");
    }

    getFavSentences(userId){
        return axios.get(USER_BASE_URL + "/" + userId + "/favsentence");
    }

    addFavSentence(userId, pictoArray){
        return axios.post(USER_BASE_URL + "/" + userId + "/favsentence/add", pictoArray);
    }

    deleteFavSentence(userId, sentenceId){
        return axios.delete(USER_BASE_URL + "/" + userId + "/favsentence/" + sentenceId + "/delete");
    }

}

export default new UserService();