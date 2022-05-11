import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Image, ScrollView} from 'react-native';

import Pictogram from "../components/Pictogram.jsx";
import UserService from '../services/UserService.jsx';
import styles from '../styles/screens/favorites.jsx';
import style from '../styles/screens/favorites.jsx';
import globalStyle from '../styles/components/global.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

// for now, need to refresh the page to see the updates
function Favorites() {

    const [allFavSentences, setAllFavSentences] = useState([]);
    const [firstRender, setFirstRender] = useState(true);
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
        if (firstRender) {
            setFirstRender(false);
        } else {
            UserService.getFavSentences(userId).then((response) => {
                if (response.data.length !== 0){
                    recreateSentences(response.data);
                }
            }).catch((err) => {
                console.error("Failed to get fav sentences: " + err);
            });
        }
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
            <ScrollView style={style.container}>
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
                                <ImageBackground source={require('../images/DeleteIcon.png')} style={globalStyle.imageButton}/>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;
