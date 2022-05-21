import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';

import UserService from '../services/UserService.jsx';
import Popup from "../components/Popup.jsx";
import PictoContainer from "../components/Home/PictoContainer.jsx";
import FavPictoContainer from "../components/Home/FavPictoContainer.jsx";
import SelectedPictoContainer from "../components/Home/SelectedPictoContainer.jsx";
import ButtonsContainer from "../components/Home/ButtonsContainer.jsx";


import * as Speech from 'expo-speech';

import style from '../styles/screens/home.jsx';
import globalStyle from '../styles/components/global.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { clearWord } from '../utils/clearWord.jsx';


function Home() {

    const [selectedPictoArray, setSelectedPictoArray] = useState([]);
    const [favPicto, setFavPicto] = useState([]);
    const [userId, setUserId] = useState();
    const [favPictoId, setFavPictoId] = useState([]);
    const [predictPicto, setPredictPicto] = useState([]);
    const [isAddingToFav, setIsAddingToFav] = useState(false);

    // useEffect = after every render
    // 2nd argument: "You can tell React to skip applying an effect if certain values haven’t changed between re-renders"
    // if [], only called the first time
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

    // useCallBack : "memoïsation", va garder en mémoire les return selon les inputs, opti (2eme argu = les dépendances)
    let selectPictoCallback = useCallback((picto) => {
        addPictoToArray(picto);
        AlgoService.predict(clearWord(picto.name))
        .then((response) => setPredictPicto(response.data.splice(1,response.data.length)))
            .catch((err) => console.log("Failed to predict picto: " + err));
    });

    let addPictoToArray = function(picto) {
        if (selectedPictoArray.length >= 10) {  // Number max to change?
            Popup(false, "Nombre maximal de pictogrammes atteints (10) !");
        } else {
            setSelectedPictoArray(oldArray => [...oldArray, picto]);
        }
    }

    let getFavPictoCallback = function(data){
        setFavPicto(data);
        const favPictoIdList = [];
        for (let i=0; i<data.length; i++) {
            favPictoIdList.push(data[i].id);
        }
        setFavPictoId(favPictoIdList);
    };

    let onAddPictoToFav = function(picto){
        setFavPicto(oldArray => [...oldArray, picto]);
        setFavPictoId(oldArray => [...oldArray, picto.id]);
        setIsAddingToFav(false);
    }

    let onDeleteFavPicto = function(picto) {
        setFavPicto(oldArray => [...oldArray.filter(item => item !== picto)]);
        setFavPictoId(oldArray => [...oldArray.filter(item => item !== picto.id)]);

        UserService.deleteFavPicto(userId, picto.id).then((response) => {
            Popup(false, "Pictogramme supprimé des favoris !");
        }).catch((err) => {
           console.error("Failed to delete picto from fav: " + err);
        });
    }

    let handleAddPictoToFav = useCallback(() => {
        setIsAddingToFav(true);
    });


    // Buttons actions
    let handleReadSentence = function(){
        for (let i = 0; i < selectedPictoArray.length; i++) {
            readWord(selectedPictoArray[i].name);
        }
    }

    let handleRemovePicto = function(){
        removeLastPicto();
        stopReading();
    }

    let removeLastPicto = function() {
        setSelectedPictoArray(oldArray => [...oldArray.slice(0, oldArray.length - 1)]);
    }

    let handleAddSentenceToFav = function(){
        if (selectedPictoArray.length < 2) {
            Popup(false, "Sélectionnez au moins 2 pictogrammes pour mettre la phrase en favori !")
            return;
        }
        addSentenceToFav();
    }

    let addSentenceToFav = function() {
        UserService.addFavSentence(userId, selectedPictoArray).then((response) => {
            Popup(false, "Phrase ajoutée aux favoris !");
        }).catch((err) => {
           console.error("Failed to add sentence to fav: " + err);
        });
    }


    // Speech
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
                <SelectedPictoContainer selectedPictoArray={selectedPictoArray}>
                </SelectedPictoContainer>
                <ButtonsContainer handleReadSentence={handleReadSentence}
                                  handleRemovePicto={handleRemovePicto}
                                  handleAddSentenceToFav={handleAddSentenceToFav}>
                </ButtonsContainer>
                
            </View>

            <View style={style.botContainer}>
                <FavPictoContainer favPicto={favPicto} isAddingToFav={isAddingToFav} userId={userId}
                                   getFavPictoCallback={getFavPictoCallback}
                                   selectPictoCallback={selectPictoCallback}
                                   onDeleteFavPicto={onDeleteFavPicto}
                                   handleAddPictoToFav={handleAddPictoToFav}>
                </FavPictoContainer>
                <PictoContainer favPictoId={favPictoId} isAddingToFav={isAddingToFav} userId={userId}
                                selectPictoCallback={selectPictoCallback}
                                onAddPictoToFav={onAddPictoToFav}>
                </PictoContainer>
            </View>
        </View>
    )
}

export default Home;