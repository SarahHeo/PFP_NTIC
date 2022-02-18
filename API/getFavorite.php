<?php
header('Access-Control-Allow-Origin: *');

$Connection = mysqli_connect("localhost","root","");
$DB = mysqli_select_db($Connection, "ntic");

$SQ = "select * from picto_favoris";
$Table = mysqli_query($Connection,$SQ);


if (mysqli_num_rows($Table) > 0) {
    for ($counter = 1; $counter <= mysqli_num_rows($Table); $counter++) {
        $Row = mysqli_fetch_assoc($Table);
        $IDfavoris = $Row['IDfavoris'];
        $Nom = utf8_encode($Row['Nom']);
        $url = $Row['url'];

        $Response[] = array("IDfavoris"=>$IDfavoris, "Nom"=>$Nom, "url"=>$url);
    }
    echo json_encode($Response);
}
else {
    $Message = "Server Error...Please try later";
}

?>