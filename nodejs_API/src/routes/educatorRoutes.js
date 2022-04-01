module.exports = app => {
    const educator = require("../controllers/educatorController.js");
    const AuthMiddleware = require("../middlewares/authenticationMiddleware.js");
    var router = require("express").Router();

    router.post("/email", educator.getByEmail);

    app.use('/educator', router);
}