const Educator = require("../models/educatorModel.js");
const bcrypt = require("bcrypt");

const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

// POST Requests
exports.register = async (req, res) => {
    if (!req.body){
        res.status(400).send({
            message: `Can't create a new educator out of an empty request body`
        });
    }
    const hashedPassword = await hashPassword(req.body.password);
    const educator = new Educator({
        name: req.body.name,
        firstName: req.body.firstName,
        email: req.body.email,
        password: hashedPassword
    });
    Educator.register(educator, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || `An error occured while creating the new pictogram`
            });
        } else {
            res.send(data);
        }
    });
};

exports.getByEmail = (req, res) => {
    if (!req.body){
        res.status(400).send({
            message: `Can't get a educator based on empty email`
        });
    }
    Educator.getByEmail(req.body.email, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find the educator with email: ${req.body.email}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving educator with email: ${req.body.email}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.login = (req, res) => {
    if (!req.body){
        res.status(400).send({
            message: `Can't create a new educator out of an empty request body`
        });
    }
    Educator.getByEmail(req.body.email, async (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find the educator with email: ${req.body.email}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving educator with email: ${req.body.email}`
                });
            }
        } else {
            console.log(data);
            res.send(await bcrypt.compare(req.body.password, data.password));
        }
    });
};

