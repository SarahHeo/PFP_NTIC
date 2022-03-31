module.exports = app => {
    const educator = require("../controllers/educatorController.js");
    var router = require("express").Router();

    router.post("/", educator.register);
    router.post("/email", educator.getByEmail);
    router.post("/login", educator.login);

    app.use('/educator', router);
}