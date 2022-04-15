import React, { useState, useEffect, useCallback } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, Image} from 'react-native';

import Pictogram from "./Pictogram.js";
import UserService from '../services/UserService.js';
import styles from '../style/pages/favorites.js';
import style from '../style/pages/favorites.js';
import globalStyle from '../style/components/global.js';



// for now, need to refresh the page to see the updates
function Favorites() {

    const [allFavSentences, setAllFavSentences] = useState([]);

    useEffect(function loadFavSentences(){
        // !!!!!!!!!!!!!!!!!!!! hardcoded user id !!!!!!!!!!!!!!!!!!!!
        UserService.getFavSentences(22).then((response) => {
            recreateSentences(response.data);
        }).catch((err) => {
            console.error("Failed to get fav sentences: " + err);
        });
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

    let handleRemoveFavSentence = function(idSentence){
        UserService.deleteFavSentence(22, idSentence).then((response) => {
            removeSentenceFromDisplay(idSentence);
        }).catch((err) => {
           console.error("Failed to add sentence to fav: " + err);
        });  
    }

    let removeSentenceFromDisplay = function(idSentence){
        const newArray = allFavSentences.filter(function(sentence) { 
            return sentence[0].idSentence !== idSentence
        });
        setAllFavSentences(newArray);
    }

    return (
        <View style={globalStyle.mainContainer}>
            <View style={globalStyle.mainTitleContainer}>
                <Text style={globalStyle.mainTitle}>Phrases enregistrées</Text>
            </View>
            <View style={style.container}>
                {allFavSentences.length == 0 &&
                    <View style={styles.phrase_container}>
                        <Text>Aucune phrase n'a encore été ajoutée en favori !</Text>
                    </View>
                }
                {allFavSentences.length != 0 && allFavSentences.map(sentence => {
                    return (
                        <View style={style.sentenceContainer} key={sentence[0].idSentence.toString()}>
                            <FlatList
                                numColumns={14}
                                data={sentence}
                                keyExtractor={(item) => item.idPicto.toString()}
                                renderItem={({item}) => 
                                    <Pictogram picto={item} isTouchable={false} id={"favScreen"}/>
                                }
                            />
                            <TouchableOpacity style={[globalStyle.deleteButton, style.deleteButton]} onPress={() => {handleRemoveFavSentence(sentence[0].idSentence)}}>
                                <ImageBackground source={require('../images/DeleteIcon.png')} style={styles.image}/>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default Favorites;
