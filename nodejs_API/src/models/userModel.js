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
        if (res.length) {
            result(null, res);
            return;
        }
        // Could not find favorite pictogram with the user id
        result({ kind: "not_found" }, null);
    });

};


// DELETE SQL Queries


module.exports = User;