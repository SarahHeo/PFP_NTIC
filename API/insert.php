<?php

    //On commence par se connecter à la base de donnée
    $Connection = mysqli_connect("localhost","root","");
    $DB = mysqli_select_db($Connection, "ntic");

    //Ici on s'occupe de décoder les informations envoyé par l'appli car elles sont en json
    $EncodedData = file_get_contents('php://input');
    $DecodedData = json_decode($EncodedData, true);

    //On récupère toutes les données décodées et les enregistres dans la variable adéquate
    $IDpatient = $DecodedData['IDpatient'];
    $IDmedecin = $DecodedData['IDmedecin'];
    $NomPatient = $DecodedData['NomPatient'];
    $PrenomPatient = $DecodedData['PrenomPatient'];
    $Age = $DecodedData['Age'];
    $Sexe = $DecodedData['Sexe'];
    $NomMedecin = $DecodedData['NomMedecin'];
    $PrenomMedecin = $DecodedData['PrenomMedecin'];
    $Email = $DecodedData['Email'];
    $MotDePasse = $DecodedData['MotDePasse'];

    //On envoie les données à la base de données
    $IQpatient = "insert into patient(IDpatient, NomPatient, PrenomPatient, Age, Sexe) values('$IDpatient', '$NomPatient', '$PrenomPatient', '$Age', '$Sexe')";
    $IQmedecin = "insert into medecin(IDmedecin, NomMedecin, PrenomMedecin, Email, MotDePasse) values('$IDmedecin', '$NomMedecin', '$PrenomMedecin', '$Email', PASSWORD('$MotDePasse'))";

    $R_Patient = mysqli_query($Connection, $IQpatient);
    $R_Medecin = mysqli_query($Connection, $IQmedecin);

    if ($R_Patient AND $R_Medecin) {
        $Message = "Resgistration successfull";
    }
    else {
        $Message = "Server Error...Please try later";
    }

    //On informe l'utilisateur de si l'inscription a fonctionné ou non
    $Response[]=array("Message"=>$Message);
    //A l'inverse de la reception, quand on envoie des données à l'application il faut les encoder en json
    echo json_encode($Response);

?>