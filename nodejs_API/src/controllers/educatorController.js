const Educator = require("../models/educatorModel.js");
const JWT = require("../utils/authenticationServices.js");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../utils/authenticationServices.js");

const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

// POST Requests
exports.register = async (req, res) => {
    if (Object.keys(req.body).length === 0){
        res.status(400).send({
            message: `Can't create a new educator out of an empty request body`
        });
    } else if (req.body.password){
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
    } else {
        res.status(400).send({
            message: `Password is missing`
        });
    }
};

exports.getByEmail = (req, res) => {
    if (Object.keys(req.body).length === 0){
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
    if (!req.body.password || !req.body.email){
        res.status(400).send({
            message: `Credentials are missing`
        });
    } else {
        Educator.getByEmail(req.body.email, async (error, data) => {
            console.log(error)
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
                if (await bcrypt.compare(req.body.password, data.password)){
                    const accessToken = JWT.generateJWT(data.id, data.email);
                    res.send(accessToken);
                } else {
                    res.status(500).send({
                        message: `Password is not correct: ${req.body.email}`
                    });
                }
            }
        });
    }
};

