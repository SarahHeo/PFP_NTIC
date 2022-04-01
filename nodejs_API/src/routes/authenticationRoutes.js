module.exports = app => {
    const educator = require("../controllers/educatorController.js");
    var router = require("express").Router();

    router.post("/register", educator.register);
    router.post("/login", educator.login);

    app.use('/authentication', router);
}