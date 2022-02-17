<?php

//On commence par se connecter à la base de donnée
$Connection = mysqli_connect("localhost","root","");
$DB = mysqli_select_db($Connection, "ntic");

//On récupère les informations relatives aux pictogrammes depuis la base de données
$SQ = "select * from pictogramme";
$Table = mysqli_query($Connection,$SQ);


if (mysqli_num_rows($Table) > 0) {
    for ($counter = 1; $counter <= mysqli_num_rows($Table); $counter++) {
        $Row = mysqli_fetch_assoc($Table);
        $IDpictogramme = $Row['IDpictogramme'];
        $Nom = $Row['Nom'];
        $url = $Row['url'];

        $Response[] = array("IDpictogramme"=>$IDpictogramme, "Nom"=>$Nom, "url"=>$url);
    }
    //On stocke les différentes données dans un tableau que l'on encode en json pour l'envoyer à l'application
    echo json_encode($Response);
}
else {
    $Message = "Server Error...Please try later";
}

?>