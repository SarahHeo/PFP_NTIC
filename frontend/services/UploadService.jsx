const axios = require("axios");

const UPLOAD_BASE_URL = 'http://192.168.0.9:8080/upload';

class UploadService {

    upload(data) {
        fetch('http://192.168.0.9:8080/upload/single', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: data,
            credentials: 'include'
        })
        .then(res => res.json())
        .then(res => {
            console.log("Upload pictos: " + res.msg);
        })
        .catch(function(error){
            console.error("Upload pictos: " + error);
        });
}

}

export default new UploadService();