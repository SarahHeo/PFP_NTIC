import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';

import UserService from '../../services/UserService.jsx';
import Pictogram from "../Pictogram.jsx";
import Popup from "../Popup.jsx";
import addIcon from "../../images/AddIcon.png";

import style from '../../styles/screens/home.jsx';
import globalStyle from '../../styles/components/global.jsx';

function FavPictoContainer(props) {

    const favPicto = props.favPicto;
    const isAddingToFav = props.isAddingToFav;
    const userId = props.userId;
    const getFavPictoCallback = props.getFavPictoCallback;
    const selectPictoCallback = props.selectPictoCallback;
    const onDeleteFavPicto = props.onDeleteFavPicto;
    const handleAddPictoToFav = props.handleAddPictoToFav;

    useEffect(function loadFavPicto(){
        UserService.getUserFavPicto(userId).then((response) => {
            getFavPictoCallback(response.data);
        }).catch((err) => {
            console.log("Failed to get fav images: " + err);
        });
    }, [userId]);

    let getDeleteFavPictoDialog = useCallback((picto) => {
        Popup(true, "Supprimer", "Supprimer ce pictogramme des favoris ?", [
            {
                text: "Annuler",
                style: "cancel"
            },{ 
                text: "OK",
                onPress: () => onDeleteFavPicto(picto)
            }
        ])
    });

    const footer = () => {
        return (
            <View style={style.addButtonContainer}>
                <TouchableOpacity style={[globalStyle.addFavButton, style.favButton]} onPress={() => handleAddPictoToFav()}>
                    <Image source={addIcon} style={globalStyle.buttonImage}/>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={[style.favPictoContainer, {}]}>
            <FlatList
                //numColumns={12}
                data={favPicto}
                ListFooterComponent={footer}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => 
                    <Pictogram picto={item} isTouchable={true} 
                               onPressHandler={selectPictoCallback} 
                               onLongPress={getDeleteFavPictoDialog} id={"fav"} 
                               isAddingToFav={isAddingToFav} canAddToFav={false}/>
                }
            />
        </View>
    )
}

export default FavPictoContainer;