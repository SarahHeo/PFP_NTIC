module.exports = app => {
    const user = require("../controllers/userController.js");
    const userFavSentence = require("../controllers/userFavSentenceController.js");
    var router = require("express").Router();

    router.get("/:id/favpicto", user.getFavPicto);                              // Retrieve fav picto of user with given id
    router.get("/:id/favsentence", userFavSentence.getByUserId);                // Get fav sentences of user with given id
    router.post("/:id/favsentence/add", userFavSentence.add);                   // Add a sentence to fav of user with given id
    router.delete("/:id/favsentence/:idsentence/delete/", userFavSentence.delete);     

    app.use('/user', router);
}