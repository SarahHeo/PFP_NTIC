import React, { useState, useEffect, useCallback } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, Image} from 'react-native';

import {getImageFromDatabase, getPictosFavoriteFromDatabase} from "../API/API_Database";
import PictogramService from '../services/PictogramService.js';
import Pictogram from "./Pictogram";

import * as Speech from 'expo-speech';

import styles from '../style/homeScreen.js';

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
        });
    }, []);

    useEffect(function loadFavPicto(){
        (async () => {
            return await getPictosFavoriteFromDatabase();
        })()
        .then((data) => {
            setFavPicto(data);
        })
        .catch((err) => {
            console.error("Failed to get fav images : " + err);
        })
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

    let readWord = function(word) {
        Speech.speak(word, {language: 'fr'})
    }

    let stopReading = function(){
        Speech.stop();
    }
        
    return (
        <View style={styles.main_container}>

            {/* Sentence bar + buttons */}
            <View style={styles.top_container}>
                <View style={styles.searchBar}>
                    <FlatList
                        numColumns={8}
                        data={pictoArray}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Pictogram picto={item} isTouchable={false}/>}/>
                </View>
                <TouchableOpacity style={styles.readButton} onPress={() => {handleReadSentence()}}>
                    <ImageBackground source={require('../Images/ReadIcone.png')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => {handleRemovePicto()}}>
                    <ImageBackground source={require('../Images/DeleteIcone.png')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favButton}>
                    <ImageBackground source={require('../Images/FavIcone.png')} style={styles.image}/>
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