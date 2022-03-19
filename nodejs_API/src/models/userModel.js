const database = require("../database/database.js");

const User = function(user) {
    
}

User.getFavPicto = (id, result) => {
    var query = `SELECT * FROM Pictogram WHERE id IN (SELECT idPictogram FROM User_FavPicto WHERE idUser = ?)`
    database.query(query, id, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        result(null, res);
        return;
    });

};


// DELETE SQL Queries


module.exports = User;