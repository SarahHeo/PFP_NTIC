module.exports = app => {
    const pictogram = require("../controllers/pictogramController.js");
    var router = require("express").Router();

    router.get("/", pictogram.getAll);         // Retrieve all pictograms
    router.get("/:id", pictogram.getById);     // Retrieve pictogram with given ID
    router.post("/", pictogram.add);           // Add a new pictogram to the SQL table
    router.delete("/:id", pictogram.delete);   // Delete the pictogram with given ID from the SQL table
    
    app.use('/pictograms', router);
}