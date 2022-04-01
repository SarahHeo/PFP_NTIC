const database = require("../database/database.js");

const userFavSentence = function(favSentence) {
    this.idUser = favSentence.idUser;
    this.idPictogram = favSentence.idPictogram;
    this.order = favSentence.order;
}

userFavSentence.getByUserId = (userId, result) => {
    const query = "SELECT FS.id as idSentence, FS.position, P.id as idPicto, P.name, P.url " 
                + "FROM User_FavSentence FS INNER JOIN Pictogram P ON FS.idPictogram = P.id "
                + "WHERE idUser = ? "
                + "ORDER BY FS.id, FS.position;"
    database.query(query, userId, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        if (res.length) {
            result(null, res);
            return;
        }
        // Could not find favorite sentence with the user id
        result({ kind: "not_found" }, null);
    });
};

userFavSentence.add = (rowsForNewFavSentence, result) => {
    database.query(`INSERT INTO User_FavSentence VALUES ?`, [rowsForNewFavSentence], (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        //console.log("created tutorial: ", { id: res.insertId, ...newFavSentence });
        result(null, { id: res.insertId, ...rowsForNewFavSentence });
    });
};

userFavSentence.getLastIndex = (result) => {
    return new Promise((resolve, reject) => {
        var query = `SELECT MAX(id) as maxId FROM User_FavSentence`
        database.query(query, (error, res) =>{
            if (error){
                console.log("error: ", error);
                reject(error);
            }
            resolve(res[0]);
        });
    });
};

module.exports = userFavSentence;