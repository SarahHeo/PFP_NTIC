module.exports = app => {
    const educator = require("../controllers/educatorController.js");
    const validator = require("../validators/registerValidator.js");
    var router = require("express").Router();

    router.post("/register", validator.registerArgumentsValidator(), validator.validate, educator.register);
    router.post("/login", educator.login);

    app.use('/authentication', router);
}   