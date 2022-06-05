import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, Image } from 'react-native';
import * as Speech from 'expo-speech';

import Pictogram from "../components/Pictogram.jsx";
import Popup from "../components/Popup.jsx";
import UserService from '../services/UserService.jsx';
import style from '../styles/screens/favorites.jsx';
import globalStyle from '../styles/components/global.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

import soundIcon from '../images/sound.png';
import deleteIcon from '../images/delete.png';
import singlePictogramIcon from '../images/singlePictogram.png';
import multiplePictogramIcon from '../images/multiplePictogram.png';

// for now, need to refresh the page to see the updates
function Favorites() {

    const [currentState, setCurrentState] = useState("sentence");
    const [allFavSentences, setAllFavSentences] = useState([]);
    const [favPicto, setFavPicto] = useState([]);
    const [userId, setUserId] = useState();

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
        }).catch((err) => {
            console.log("Failed to get fav images: " + err);
        });
    }, [userId]);

    useEffect(function loadFavSentences(){
        UserService.getFavSentences(userId).then((response) => {
            if (response.data.length !== 0){
                recreateSentences(response.data);
            }
        }).catch((err) => {
            console.error("Failed to get fav sentences: " + err);
        });
    }, [userId]);

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
        console.log(favSentences)
    }

    let getDeleteFavSentenceDialog = function(idSentence) {
        Popup(true, "Supprimer", "Supprimer cette phrase des favoris ?",
            [
                {
                    text: "Annuler",
                    style: "cancel"
                },
                { 
                    text: "OK",
                    onPress: () => handleRemoveFavSentence(idSentence)
                }
            ])
    };

    let getDeleteFavPictoDialog = function(picto) {
        Popup(true, "Supprimer", "Supprimer ce pictogramme des favoris ?", [
            {
                text: "Annuler",
                style: "cancel"
            },
            { 
                text: "OK",
                onPress: () => handleRemoveFavPicto(picto)
            }
        ])
    };

    let handleRemoveFavSentence = function(idSentence){
        UserService.deleteFavSentence(userId, idSentence).then((response) => {
            removeSentenceFromDisplay(idSentence);
            Popup(false, "Phrase supprimée des favoris !");
        }).catch((err) => {
           console.error("Failed to add sentence to fav: " + err);
        });  
    }

    let handleRemoveFavPicto = function(picto) {
        setFavPicto(oldArray => [...oldArray.filter(item => item !== picto)]);

        UserService.deleteFavPicto(userId, picto.id).then((response) => {
            Popup(false, "Pictogramme supprimé des favoris !");
        }).catch((err) => {
           console.error("Failed to delete picto from fav: " + err);
        });
    }

    let removeSentenceFromDisplay = function(idSentence){
        const newArray = allFavSentences.filter(function(sentence) { 
            return sentence[0].idSentence !== idSentence
        });
        setAllFavSentences(newArray);
    }

    let handleReadSentence = function(sentence){
        for (let i = 0; i < sentence.length; i++) {
            readWord(sentence[i].name)
        }
    }

    let handleReadWord = function(word){
        readWord(word.name);
    }

    let readWord = function(word) {
        Speech.speak(word, {language: 'fr'})
    }

    return (
        <View style={globalStyle.mainContainer}>
            <View style = {style.buttonChoiceContainer}>
                <TouchableOpacity style={style.buttonChoice} onPress={() => setCurrentState("sentence")}>
                    <Image source={multiplePictogramIcon} style={style.buttonChoiceImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonChoice} onPress={() => setCurrentState("pictogram")}>
                    <Image source={singlePictogramIcon} style={style.buttonChoiceImage}/>
                </TouchableOpacity>
            </View>
            { currentState === "sentence" &&
                <View style={globalStyle.mainContainer}>
                    <View style={globalStyle.mainTitleContainer}>
                        <Text style={globalStyle.mainTitle}>Phrases favorites</Text>
                    </View>
                    <View style={style.container}>
                        { allFavSentences.length == 0 &&
                            <View style={style.messageContainer}>
                                <Text style={style.message}>Aucune phrase n'a encore été ajoutée en favori !</Text>
                            </View>
                        }
                        { allFavSentences.length != 0 &&
                            <FlatList 
                            data={allFavSentences} 
                            keyExtractor={(item) => item[0].idSentence.toString()}
                            renderItem={({item})=> 
                                <View style={style.sentenceContainer}>
                                    <FlatList
                                        numColumns={10}
                                        data={item}
                                        keyExtractor={(item) => item.idPicto.toString()}
                                        renderItem={({item}) => 
                                            <Pictogram picto={item} isTouchable={false} id={"favScreen"}/>
                                        }
                                    />
                                    <View style={style.buttonContainer}>
                                        <TouchableOpacity style={[globalStyle.readButton, style.button]} onPress={() => {handleReadSentence(item)}}>
                                            <Image source={soundIcon} style={globalStyle.buttonImage}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[globalStyle.deleteButton, style.button]} onPress={() => {getDeleteFavSentenceDialog(item[0].idSentence)}}>
                                            <Image source={deleteIcon} style={globalStyle.deleteImage}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }/>
                        }
                    </View>
                </View>
            }

            { currentState === "pictogram" &&
                <View style={globalStyle.mainContainer}>
                    <View style={globalStyle.mainTitleContainer}>
                        <Text style={globalStyle.mainTitle}>Pictogrammes favoris</Text>
                    </View>
                    <View style={style.container}>
                        {favPicto.length == 0 &&
                            <View style={style.messageContainer}>
                                <Text style={style.message}>Aucun pictogramme n'a encore été ajouté en favori !</Text>
                            </View>
                        }
                        { favPicto.length != 0 &&
                            <FlatList 
                            data={favPicto} 
                            numColumns={3}
                            contentContainerStyle={style.pictogramFlatList}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item})=> 
                                <View style={style.pictogramContainer}>
                                    <Pictogram picto={item} isTouchable={false} id={"favScreen"}/>
                                    <View style={style.buttonContainer}>
                                        <TouchableOpacity style={[globalStyle.readButton, style.button]} onPress={() => {handleReadWord(item)}}>
                                            <Image source={soundIcon} style={globalStyle.buttonImage}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[globalStyle.deleteButton, style.button]} onPress={() => {getDeleteFavPictoDialog(item)}}>
                                            <Image source={deleteIcon} style={globalStyle.deleteImage}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }/>
                        }
                    </View>
                </View>
            }
        </View>
    )
}

export default Favorites;