const axios = require("axios");

const PICTOGRAM_BASE_URL = 'http://localhost:8080/pictograms';

class PictogramService {
    getPictograms(){
        return axios.get(PICTOGRAM_BASE_URL);
    }

    addCustomPictogram(data){
        return axios.post(PICTOGRAM_BASE_URL, data);
    }
}

export default new PictogramService();