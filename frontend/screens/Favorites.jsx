import React, { useState, useEffect } from 'react';
import { View, Text, Hello, TouchableOpacity, FlatList, Image } from 'react-native';
import * as Speech from 'expo-speech';

import Pictogram from "../components/Pictogram.jsx";
import Popup from "../components/Popup.jsx";
import UserService from '../services/UserService.jsx';
import style from '../styles/screens/favorites.jsx';
import globalStyle from '../styles/components/global.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

// for now, need to refresh the page to see the updates
function Favorites() {

    const [allFavSentences, setAllFavSentences] = useState([]);
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

    let handleRemoveFavSentence = function(idSentence){
        UserService.deleteFavSentence(userId, idSentence).then((response) => {
            removeSentenceFromDisplay(idSentence);
            Popup(false, "Phrase supprimée des favoris !");
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

    let handleReadSentence = function(sentence){
        const te = "re";
        for (let i = 0; i < sentence.length; i++) {
            readWord(sentence[i].name)
        }
    }

    let readWord = function(word) {
        Speech.speak(word, {language: 'fr'})
    }

    return (
        <View style={globalStyle.mainContainer}>
            <View style={globalStyle.mainTitleContainer}>
                <Text style={globalStyle.mainTitle}>Phrases enregistrées</Text>
            </View>
            <View style={style.container}>
                {allFavSentences.length == 0 &&
                    <View style={style.messageContainer}>
                        <Text style={style.message}>Aucune phrase n'a encore été ajoutée en favori !</Text>
                    </View>
                }
                {allFavSentences.length != 0 &&
                    <FlatList 
                    //contentContainerStyle={style.sentenceContainer}
                    data={allFavSentences} 
                    keyExtractor={(item) => item[0].idSentence.toString()}
                    renderItem={({item})=> 
                        <View style={style.sentenceContainer}>
                            <FlatList
                                //contentContainerStyle={style.test}
                                numColumns={10}
                                data={item}
                                keyExtractor={(item) => item.idPicto.toString()}
                                renderItem={({item}) => 
                                    <Pictogram picto={item} isTouchable={false} id={"favScreen"}/>
                                }
                            />
                            <View style={style.buttonContainer}>
                                <TouchableOpacity style={[globalStyle.readButton, style.button]} onPress={() => {handleReadSentence(item)}}>
                                    <Image source={require('../images/Sound.png')} style={globalStyle.buttonImage}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={[globalStyle.deleteButton, style.button]} onPress={() => {getDeleteFavSentenceDialog(item[0].idSentence)}}>
                                    <Image source={require('../images/delete.png')} style={globalStyle.deleteImage}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }/>
                }
            </View>
        </View>
    )
}

export default Favorites;