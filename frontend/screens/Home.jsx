import React, { useState, useEffect, useCallback } from 'react';
import {View, TouchableOpacity, ImageBackground, FlatList} from 'react-native';

import PictogramService from '../services/PictogramService.jsx';
import UserService from '../services/UserService.jsx';
import Pictogram from "../components/Pictogram.jsx";

import * as Speech from 'expo-speech';

import style from '../styles/screens/home.jsx';
import globalStyle from '../styles/components/global.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';



function Home() {

    const [allPicto, setAllPicto] = useState([]);
    // Without first render, the favorite pictograms would be loaded before the user id is even retrieved from the async storage,
    // thus always being empty 
    const [firstRender, setFirstRender] = useState(true);
    const [pictoArray, setPictoArray] = useState([]);
    const [favPicto, setFavPicto] = useState([]);
    const [userId, setUserId] = useState();
 
    // useEffect = after every render
    // 2nd argument: "You can tell React to skip applying an effect if certain values haven’t changed between re-renders"
    // if [], only called the first time
    useEffect(function loadAllPicto(){
        PictogramService.getPictograms().then((response) => {
            setAllPicto(response.data);
        }).catch((err) => {
            console.log("Failed to get all picto: " + err);
        });
    }, []);

    useEffect(() =>{
        const retrieveId = async () => {
            try {
                const id = await AsyncStorage.getItem("@user_id");
                console.log(`Retrieved id: ${id}`);
                if (id === null){
                    setUserId(22);
                } else {
                    setUserId(JSON.parse(id));
                }
                 
            } catch(error) {
                console.log("An error occured retrieving current user");
                setUserId(22);
            }
        }       
        retrieveId();
    }, []);

    useEffect(function loadFavPicto(){
        if (firstRender) {
            setFirstRender(false);
        } else {
            UserService.getUserFavPicto(userId).then((response) => {
                setFavPicto(response.data);
            }).catch((err) => {
                console.log("Failed to get fav images: " + err);
            }); 
        }
    }, [userId]);

    // For debug only
    /*
    useEffect(function updatePictoArray(){
        // Display in console
        for (let i=0; i<pictoArray.length; i++) {
            console.log(pictoArray[i].Nom)
        }
        console.log('________________');
    }, [pictoArray]);
    */
    
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
            <View style={style.topContainer}>
                <View style={style.selectedPictoContainer}>
                    <FlatList
                        numColumns={14}
                        data={pictoArray}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Pictogram picto={item} isTouchable={false} id={"selected"}/>}/>
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
            <View style={style.botContainer}>
                <View style={[style.favPictoContainer, {}]}>
                    <FlatList
                        //numColumns={12}
                        data={favPicto}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => 
                            <Pictogram picto={item} isTouchable={true} onPressHandler={selectPictoCallback} id={"fav"}/>
                        }
                    />
                </View>
                <View style={style.pictoContainer}>
                    <FlatList
                        numColumns={9}
                        data={allPicto}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => 
                            <Pictogram picto={item} isTouchable={true} onPressHandler={selectPictoCallback} id={"list"}/>
                        }
                    />
                </View>
            </View>
        </View>
    )
}

export default Home;