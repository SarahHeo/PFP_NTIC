const axios = require("axios");

const ALGO_BASE_URL = 'http://localhost:8080/algo';

class AlgoService {

    predict(word){
        return axios.get(ALGO_BASE_URL + "/" + word);
    }

}

export default new AlgoService();