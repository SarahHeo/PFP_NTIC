import React, { useState, useEffect, useCallback } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, Image} from 'react-native';

import Pictogram from "./Pictogram";
import UserService from '../services/UserService.js';
import styles from '../style/pages/favorites.js';
import style from '../style/components/global.js';

// for now, need to refresh the page to see the updates
function Favorites() {

    const [allFavSentences, setAllFavSentences] = useState([]);

    useEffect(function loadFavSentences(){
        // !!!!!!!!!!!!!!!!!!!! hardcoded user id !!!!!!!!!!!!!!!!!!!!
        UserService.getFavSentences(22).then((response) => {
            recreateSentences(response.data);
        }).catch((err) => {
            console.error("Failed to get fav sentences: " + err);
        });  ;
    }, []);

    let recreateSentences = function(data){
        var favSentences = [];
        var currentSentence = [];
        var currentId = data[0].idSentence;

        for (var i = 0; i < data.length; i++){
            if (data[i].idSentence != currentId){
                favSentences.push(currentSentence);
                currentId = data[i].idSentence
                currentSentence = [];
            }
            currentSentence.push(data[i]);
        }
        favSentences.push(currentSentence);

        setAllFavSentences(favSentences);
    }

    return (
        <View style={styles.main_container}>
            <View style={styles.container}>
                {allFavSentences.length == 0 &&
                    <View style={styles.phrase_container}>
                        <Text>Aucune phrase n'a encore été ajoutée en favori !</Text>
                    </View>
                }
                {allFavSentences.length != 0 && allFavSentences.map(sentence => {
                    return (
                        <View style={styles.phrase_container} key={sentence[0].idSentence.toString()}>
                            <FlatList
                                numColumns={9}
                                data={sentence}
                                keyExtractor={(item) => item.idPicto.toString()}
                                renderItem={({item}) => 
                                    <Pictogram picto={item} isTouchable={false} isFav={false}/>
                                }
                            />
                            <TouchableOpacity style={style.deleteButtonFav} onPress={() => {handleRemovePicto()}}>
                                <ImageBackground source={require('../images/DeleteIcone.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <div>yo</div>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default Favorites;
