const database = require("../database/database.js");

const Pictogram = function(pictogram) {
    this.name = pictogram.name;
    this.url = pictogram.url;
}

Pictogram.getAll = (result) => {
    database.query("SELECT * FROM pictogramme", (err, res) =>{
        if (err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("pictograms: ", res);
        result(null, res);
    });

};

module.exports = Pictogram;