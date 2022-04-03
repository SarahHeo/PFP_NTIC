const axios = require("axios");

const PICTOGRAM_BASE_URL = 'http://192.168.0.9:8080/pictograms';

class PictogramService {
    getPictograms(){
        return axios.get(PICTOGRAM_BASE_URL);
    }
}

export default new PictogramService();