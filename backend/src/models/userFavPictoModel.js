const database = require("../database/database.js");

const UserFavPicto = function(favPicto) {
    this.idUser = favPicto.idUser;
    this.idPictogram = favPicto.idPictogram;
}

UserFavPicto.add = (userFavPicto, result) => {
    database.query(`INSERT INTO User_FavPicto SET ?`, userFavPicto, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        result(null, res);
    });
};

module.exports = UserFavPicto;