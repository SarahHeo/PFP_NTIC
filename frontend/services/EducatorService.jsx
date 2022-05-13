const axios = require("axios");

const EDUCATOR_BASE_URL = 'http://192.168.0.9:8080/educator';

class EducatorService {

    addUser(data){
        return axios.post(EDUCATOR_BASE_URL + "/user", data);
    }

    getUsersByEducator(educatorId){
        return axios.get(EDUCATOR_BASE_URL + "/" + educatorId + "/user");
    }
}

export default new EducatorService();