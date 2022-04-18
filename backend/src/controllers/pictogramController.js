const Pictogram = require("../models/pictogramModel.js");

// GET Requests

exports.getAll = (req, res) => {
    Pictogram.getAll((error, data) => {
        if (error) {
            res.status(500).send({
                message:
                    error.message || `An error occured while retrieving pictograms`
            });
        } else {
            res.send(data);
        }
    });
};

exports.getById = (req, res) => {
    Pictogram.getById(req.params.id, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find the pictogram with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving pictogram with id: ${req.params.id}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

// POST Requests

exports.add = (req, res) => {
    if (Object.keys(req.body).length === 0){
        res.status(400).send({
            message: `Can't create a new pictogram out of an empty request body`
        });
    }
    const pictogram = new Pictogram({
        name: req.body.name,
        url: req.body.url
    });
    Pictogram.add(pictogram, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || `An error occured while creating the new pictogram`
            });
        } else {
            res.send(data);
        }
    });
};

// DELETE Requests

exports.delete = (req, res) => {
    Pictogram.delete(req.params.id, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find the pictogram with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured deleting pictogram with id: ${req.params.id}`
                });
            }
        } else {
            res.send({message: `Pictogram with id ${req.params.id} has been successfully deleted`});
        }
    });
};