import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView} from 'react-native';
import * as Speech from 'expo-speech';

import Pictogram from "../components/Pictogram.jsx";
import Popup from "../components/Popup.jsx";
import UserService from '../services/UserService.jsx';
import style from '../styles/screens/favorites.jsx';
import globalStyle from '../styles/components/global.jsx';



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
        UserService.deleteFavSentence(22, idSentence).then((response) => {
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
            <ScrollView style={style.container}>
                {allFavSentences.length == 0 &&
                    <View style={style.messageContainer}>
                        <Text style={style.message}>Aucune phrase n'a encore été ajoutée en favori !</Text>
                    </View>
                }
                {allFavSentences.length != 0 && allFavSentences.map(sentence => {
                    return (
                        <View style={style.sentenceContainer} key={sentence[0].idSentence.toString()}>
                            <FlatList
                                //contentContainerStyle={style.test}
                                numColumns={14}
                                data={sentence}
                                keyExtractor={(item) => item.idPicto.toString()}
                                renderItem={({item}) => 
                                    <Pictogram picto={item} isTouchable={false} id={"favScreen"}/>
                                }
                            />
                            <TouchableOpacity style={[globalStyle.readButton, style.button]} onPress={() => {handleReadSentence(sentence)}}>
                                <Image source={require('../images/Sound.png')} style={globalStyle.buttonImage}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[globalStyle.deleteButton, style.button]} onPress={() => {getDeleteFavSentenceDialog(sentence[0].idSentence)}}>
                                <Image source={require('../images/delete.png')} style={globalStyle.deleteImage}/>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;
