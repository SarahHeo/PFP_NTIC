module.exports = app => {
    const educator = require("../controllers/educatorController.js");
    const authMiddleware = require("../middlewares/authenticationMiddleware.js");
    var router = require("express").Router();

    router.post("/email", educator.getByEmail);

    app.use('/educator', router);
    //app.use('/educator', AuthMiddleware.mustBeAuthenticated, router);
}