const User = require("../models/userModel.js");

// GET Requests
exports.getFavPicto = (req, res) => {
    User.getFavPicto(req.params.id, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find fav picto of user with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving fav picto of user with id: ${req.params.id}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

// POST Requests
exports.getFavPicto = (req, res) => {
    User.getFavPicto(req.params.id, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find fav picto of user with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving fav picto of user with id: ${req.params.id}`
                });
            }
        } else {
            res.send(data);
        }
    });
};
