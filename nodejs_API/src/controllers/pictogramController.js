const Pictogram = require("../models/pictogramModel.js");

exports.getAll = (req, res) => {
    Pictogram.getAll((error, data) => {
        if (error) {
            res.status(500).send({
                message:
                    error.message ||"An error occured while retrieving pictograms."
            });
        } else {
            res.send(data);
        }
    });
};