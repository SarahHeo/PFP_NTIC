import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';

import PictogramService from '../services/PictogramService.jsx';
import UserService from '../services/UserService.jsx';
import AlgoService from '../services/AlgoService.jsx';
import Pictogram from "../components/Pictogram.jsx";
import Popup from "../components/Popup.jsx";


import * as Speech from 'expo-speech';

import style from '../styles/screens/home.jsx';
import globalStyle from '../styles/components/global.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { clearWord } from '../utils/clearWord.jsx';


function Home() {

    const [allPicto, setAllPicto] = useState([]);
    const [pictoArray, setPictoArray] = useState([]);
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

    useEffect(function loadFavPicto(){
        UserService.getUserFavPicto(userId).then((response) => {
            setFavPicto(response.data);
            const favPictoIdList = [];
            for (let i=0; i<response.data.length; i++) {
                favPictoIdList.push(response.data[i].id);
            }
            setFavPictoId(favPictoIdList);
        }).catch((err) => {
            console.log("Failed to get fav images: " + err);
        });
    }, [userId]);

    useEffect(function loadAllPicto(){
        PictogramService.getPictograms().then((response) => {
            setAllPicto(response.data);
        }).catch((err) => {
            console.log("Failed to get all picto: " + err);
        });
    }, [isAddingToFav, favPicto, predictPicto]);
  
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
        AlgoService.predict(clearWord(picto.name))
        .then((response) => setPredictPicto(response.data.splice(1,response.data.length)))
            .catch((err) => console.log("Failed to predict picto: " + err));
    });

    let selectFavPictoCallback = useCallback((picto) => {
        addPictoToFav(picto);
        setIsAddingToFav(false);
    });

    let getDeleteFavPictoDialog = useCallback((picto) => {
        Popup(true, "Supprimer", "Supprimer ce pictogramme des favoris ?",
            [
                {
                    text: "Annuler",
                    style: "cancel"
                },
                { 
                    text: "OK",
                    onPress: () => deleteFavPicto(picto)
                }
            ])
    });

    let deleteFavPicto = function(picto) {
        setFavPicto(oldArray => [...oldArray.filter(item => item !== picto)]);
        setFavPictoId(oldArray => [...oldArray.filter(item => item !== picto.id)]);
        UserService.deleteFavPicto(userId, picto.id).then((response) => {
            Popup(false, "Pictogramme supprimé des favoris !");
        }).catch((err) => {
           console.error("Failed to delete picto from fav: " + err);
        });
    }

    let handleRemovePicto = function(){
        removeLastPicto();
        stopReading();
    }

    let handleAddSentenceToFav = function(){
        if (pictoArray.length < 2) {
            Popup(false, "Sélectionnez au moins 2 pictogrammes pour mettre la phrase en favori !")
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
        if (pictoArray.length >= 10) {  // Number max to change?
            Popup(false, "Nombre maximal de pictogrammes atteints (10) !");
        } else {
            setPictoArray(oldArray => [...oldArray, picto]);
        }
    }

    let removeLastPicto = function() {
        setPictoArray(oldArray => [...oldArray.slice(0, oldArray.length - 1)]);
    }

    let addSentenceToFav = function() {
        UserService.addFavSentence(userId, pictoArray).then((response) => {
            Popup(false, "Phrase ajoutée aux favoris !");
        }).catch((err) => {
           console.error("Failed to add sentence to fav: " + err);
        });
    }

    let isInFavPicto = function(picto) {
        const isInFavPicto = favPictoId.includes(picto.id);
        return isInFavPicto;
    };

    let isInPredictPicto = function(picto) {
        const isInPredictPicto = predictPicto.map(picto => picto.word).includes(clearWord(picto.name));
        return isInPredictPicto;
    };

    let handleAddPictoToFav = useCallback(() => {
        setIsAddingToFav(!isAddingToFav);
    });

    let addPictoToFav = function(picto) {
        setFavPicto(oldArray => [...oldArray, picto]);
        setFavPictoId(oldArray => [...oldArray, picto.id]);
        UserService.addFavPicto(userId, picto).then((response) => {
            Popup(false, "Pictogramme ajouté aux favoris !");
        }).catch((err) => {
           console.error("Failed to add picto to fav: " + err);
        });
    }

    let readWord = function(word) {
        Speech.speak(word, {language: 'fr'})
    }

    let stopReading = function(){
        Speech.stop();
    }

    const footer = () => {
        return (
            <View style={style.favButtonContainer}>
                <TouchableOpacity style={[globalStyle.addFavButton, style.favButton]} onPress={() => {handleAddPictoToFav()}}>
                    <Image source={require('../images/AddIcon.png')} style={globalStyle.buttonImage}/>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={globalStyle.mainContainer}>
            {/* Sentence bar + buttons */}
            <View style={style.topContainer}>
                <View style={style.selectedPictoContainer}>
                    <FlatList
                        numColumns={10}
                        data={pictoArray}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Pictogram picto={item} isTouchable={false} id={"selected"}/>}/>
                </View>
                <View style={style.buttonsContainer}>
                    <TouchableOpacity style={[globalStyle.readButton, style.button]} onPress={() => {handleReadSentence()}}>
                        <Image source={require('../images/Sound.png')} style={globalStyle.buttonImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyle.deleteButton, style.button]} onPress={() => {handleRemovePicto()}}>
                        <Image source={require('../images/delete.png')} style={globalStyle.deleteImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyle.favButton, style.button]} onPress={() => {handleAddSentenceToFav()}}>
                        <Image source={require('../images/fav.png')} style={globalStyle.buttonImage}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Favorites + main */}
            <View style={style.botContainer}>
                <View style={[style.favPictoContainer, {}]}>
                    <FlatList
                        data={favPicto}
                        ListFooterComponent={footer}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => 
                            <Pictogram picto={item} isTouchable={true} onPressHandler={selectPictoCallback} onLongPress={getDeleteFavPictoDialog} id={"fav"} isAddingToFav={isAddingToFav} canAddToFav={false}/>
                        }
                    />
                </View>
                <View style={style.pictoContainer}>
                    <FlatList
                        //contentContainerStyle={style.pictoList0}
                        columnWrapperStyle={style.pictoList}
                        numColumns={9}
                        data={allPicto}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => 
                            <Pictogram picto={item} isTouchable={true} onPressHandler={isAddingToFav ? selectFavPictoCallback : selectPictoCallback} id={"list"} isAddingToFav={isAddingToFav} canAddToFav={!isInFavPicto(item)}  isPredicted={isInPredictPicto(item)}/>
                        }
                    />
                </View>
            </View>
        </View>
    )
}

export default Home;