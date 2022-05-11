const database = require("../database/database.js");

const Pictogram = function(pictogram) {
    this.name = pictogram.name;
    this.url = pictogram.url;
}

// SELECT SQL Queries

Pictogram.getAll = (result) => {
    database.query(`SELECT * FROM Pictogram`, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        result(null, res);
    });

};

Pictogram.getById = (id, result) => {
    database.query(`SELECT * FROM Pictogram WHERE id = ?`, id, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        if (res.length) {
            console.log("found tutorial: ", res[0]);
            result(null, res[0]);
            return;
        }
        // Could not find Pictogram with the id
        result({ kind: "not_found" }, null);
    });

};

// INSERT SQL Queries

Pictogram.add = (newPictogram, result) => {
    database.query(`INSERT INTO Pictogram SET ?`, newPictogram, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        console.log("created pictogram: ", { id: res.insertId, ...newPictogram });
        result(null, { id: res.insertId, ...newPictogram });
    });
};

// DELETE SQL Queries

Pictogram.delete = (id, result) => {
    database.query(`DELETE FROM Pictogram WHERE id = ?`, id, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        if (res.affectedRows == 0) {
            // Pictogram with the id not found
            result({ kind: "not_found" }, null);
            return;
        }
        console.log(`deleted tutorial with id: ${id}`);
        result(null, res);
    });
};

module.exports = Pictogram;