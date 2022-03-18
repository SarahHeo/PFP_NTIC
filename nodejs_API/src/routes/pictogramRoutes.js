module.exports = app => {
    const pictograms = require("../controllers/pictogramController.js");
    var router = require("express").Router();

    router.get("/", pictograms.getAll);         // Retrieve all pictograms
    router.get("/:id", pictograms.getById);     // Retrieve pictogram with given ID
    router.post("/", pictograms.add);           // Add a new pictogram to the SQL table
    router.delete("/:id", pictograms.delete);   // Delete the pictogram with given ID from the SQL table
    
    app.use('/pictograms', router);
}