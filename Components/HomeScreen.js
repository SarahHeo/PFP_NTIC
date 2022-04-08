import React, { useState, useEffect, useCallback } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, Image} from 'react-native';

import PictogramService from '../services/PictogramService.js';
import UserService from '../services/UserService.js';
import Pictogram from "./Pictogram";

import * as Speech from 'expo-speech';

import styles from '../style/pages/homeScreen.js';
import globalStyle from '../style/components/global.js';

function HomeScreen() {

    const [allPicto, setAllPicto] = useState([]);
    const [pictoArray, setPictoArray] = useState([]);
    const [favPicto, setFavPicto] = useState([]);

    // useEffect = after every render
    // 2nd argument: "You can tell React to skip applying an effect if certain values haven’t changed between re-renders"
    // if [], only called the first time
    useEffect(function loadAllPicto(){
        PictogramService.getPictograms().then((response) => {
            setAllPicto(response.data);
        }).catch((err) => {
            console.error("Failed to get all picto: " + err);
        });
    }, []);

    useEffect(function loadFavPicto(){
        // !!!!!!!!!!!!!!!!!!!! hardcoded user id !!!!!!!!!!!!!!!!!!!!
        UserService.getUserFavPicto(22).then((response) => {
            setFavPicto(response.data);
        }).catch((err) => {
            console.error("Failed to get fav images: " + err);
        });    
    }, []);

    // For debug only
    useEffect(function updatePictoArray(){
        // Display in console
        for (let i=0; i<pictoArray.length; i++) {
            console.log(pictoArray[i].Nom)
        }
        console.log('________________');
    }, [pictoArray]);

    // useCallBack : "memoïsation", va garder en mémoire les return selon les inputs, opti (2eme argu = les dépendances)
    let selectPictoCallback = useCallback((picto) => { 
        addPictoToArray(picto);
    });

    let handleRemovePicto = function(){
        removeLastPicto();
        stopReading();
    }

    let handleAddSentenceToFav = function(){
        if (pictoArray.length < 2) {
            alert("Sélectionnez au moins 2 pictogrammes pour mettre la phrase en favori !")
            return;
        }
        addSentenceToFav();
    }
    
    let handleReadSentence = function(){
        for (let i = 0; i < pictoArray.length; i++) {
            readWord(pictoArray[i].name)
        }
    }

    let addPictoToArray = function(picto) {
        setPictoArray(oldArray => [...oldArray, picto]);
    }

    let removeLastPicto = function() {
        setPictoArray(oldArray => [...oldArray.slice(0, oldArray.length - 1)]);
    }

    let addSentenceToFav = function() {
        UserService.addFavSentence(22, pictoArray).then((response) => {
            alert("Phrase ajoutée aux favoris !");
        }).catch((err) => {
           console.error("Failed to add sentence to fav: " + err);
        });  
    }

    let readWord = function(word) {
        Speech.speak(word, {language: 'fr'})
    }

    let stopReading = function(){
        Speech.stop();
    }
        
    return (
        <View style={globalStyle.mainContainer}>
            {/* Sentence bar + buttons */}
            <View style={styles.top_container}>
                <View style={styles.searchBar}>
                    <FlatList
                        numColumns={8}
                        data={pictoArray}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Pictogram picto={item} isTouchable={false}/>}/>
                </View>
                <TouchableOpacity style={globalStyle.readButton} onPress={() => {handleReadSentence()}}>
                    <ImageBackground source={require('../images/ReadIcon.png')} style={globalStyle.imageButton}/>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyle.deleteButton} onPress={() => {handleRemovePicto()}}>
                    <ImageBackground source={require('../images/DeleteIcon.png')} style={globalStyle.imageButton}/>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyle.favButton} onPress={() => {handleAddSentenceToFav()}}>
                    <ImageBackground source={require('../images/FavIcon.png')} style={globalStyle.imageButton}/>
                </TouchableOpacity>
            </View>

            {/* Favorites + main */}
            <View style={styles.bot_container}>
                <TouchableOpacity activeOpacity={0.7} style={styles.favoritePictosContainer}>
                    <FlatList
                        numColumns={1}
                        data={favPicto}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => 
                            <Pictogram picto={item} isTouchable={true} onPressHandler={selectPictoCallback} isFav={true}/>
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.pictos_container}>
                    <FlatList
                        numColumns={9}
                        data={allPicto}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => 
                            <Pictogram picto={item} isTouchable={true} onPressHandler={selectPictoCallback} isFav={false}/>
                        }
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen;