module.exports = app => {
    const users = require("../controllers/userController.js");
    var router = require("express").Router();

    router.get("/:id/favpicto", users.getFavPicto);         // Retrieve fav picto of user with given id


    app.use('/user', router);
}