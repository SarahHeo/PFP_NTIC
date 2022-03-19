const axios = require("axios");

const USER_BASE_URL = 'http://localhost:8080/user';

class UserService {

    getUserFavPicto(userId){
        return axios.get(USER_BASE_URL + "/" + userId + "/favpicto");
    }
}

export default new UserService();