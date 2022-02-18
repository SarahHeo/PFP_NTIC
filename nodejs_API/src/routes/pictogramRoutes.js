module.exports = app => {
    const pictograms = require("../controllers/pictogramController.js");
    var router = require("express").Router();
    router.get("/", pictograms.getAll);
    app.use('/pictograms', router);
}