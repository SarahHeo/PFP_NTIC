const axios = require("axios");

const USER_BASE_URL = 'http://localhost:8080/user';

class UserService {

    getUserFavPicto(userId){
        return axios.get(USER_BASE_URL + "/" + userId + "/favpicto");
    }

    addFavPicto(userId, picto){
        return axios.post(USER_BASE_URL + "/" + userId + "/favpicto/add", picto);
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