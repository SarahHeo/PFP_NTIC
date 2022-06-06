const database = require("../database/database.js");

const User = function(user) {
    this.Name = user.Name;
    this.FirstName = user.FirstName;
    this.DateOfBirth = user.DateOfBirth;
    this.Gender = user.Gender;
}

User.getAll = (result) => {
    database.query(`SELECT * FROM User`, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        result(null, res);
    });
};

User.getFavPicto = (id, result) => {
    var query = `SELECT * FROM Pictogram WHERE id IN (SELECT idPictogram FROM User_FavPicto WHERE idUser = ?)`
    database.query(query, id, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        result(null, res);
    });

};

User.add = (newUser, result) => {
    database.query(`INSERT INTO User SET ?`, newUser, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.updatePermission = (userId, permission, value, result) => {
    database.query(`UPDATE User SET ? = ? WHERE id = ? `, 
    [permission, value, userId], 
    (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        if (res.affectedRows == 0) {
            // not found User with the id
            result({ kind: "not_found" }, null);
            return;
          }
          console.log("updated user: ", { id: id, ...user });
          result(null, { id: id, ...user });
    });
};


// DELETE SQL Queries


module.exports = User;