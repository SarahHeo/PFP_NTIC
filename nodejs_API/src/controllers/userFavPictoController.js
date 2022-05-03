const userFavPicto = require("../models/userFavPictoModel.js");

// POST
exports.add = (req, res) => {
    if (!req.body){
        res.status(400).send({
            message: `Can't add a new pictogram to user out of an empty request body`
        });
    }
    const favPicto = new userFavPicto({
        idUser: req.params.id,
        idPictogram: req.body.id
    });
    userFavPicto.add(favPicto, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || `An error occured while adding a pictogram to user`
            });
        } else {
            res.send(data);
        }
    });
};