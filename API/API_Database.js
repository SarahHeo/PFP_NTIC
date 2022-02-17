// Appel de l'API getImage.php
export function getImageFromDatabase () {
    return fetch(
        'http://localhost/API/getImage.php')
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

// Appel de l'API getFavorite.php
export function getPictosFavoriteFromDatabase () {
    const url = 'http://10.0.2.2:80/API/getFavorite.php'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}