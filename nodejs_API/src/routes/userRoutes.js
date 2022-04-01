module.exports = app => {
    const user = require("../controllers/userController.js");
    const userFavSentence = require("../controllers/userFavSentenceController.js");
    const AuthMiddleware = require("../middlewares/authenticationMiddleware.js");
    var router = require("express").Router();

    router.get("/:id/favpicto", user.getFavPicto);                      // Retrieve fav picto of user with given id
    router.get("/:id/favsentence", userFavSentence.getByUserId);        // Get fav sentences of user with given id
    router.post("/:id/favsentence", userFavSentence.add);               // Add a sentence to fav of user with given id

    app.use('/user', router);
}