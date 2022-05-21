import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';

import PictogramService from '../../services/PictogramService.jsx';
import UserService from '../../services/UserService.jsx';
import Pictogram from "../Pictogram.jsx";
import Popup from "../Popup.jsx";

import style from '../../styles/screens/home.jsx';




function PictoContainer(props) {

    const [allPicto, setAllPicto] = useState([]);

    const isAddingToFav = props.isAddingToFav;
    const favPictoId = props.favPictoId;
    const selectPictoCallback = props.selectPictoCallback;
    const onAddPictoToFav = props.onAddPictoToFav;
    const userId = props.userId;

    useEffect(function loadAllPicto(){
        PictogramService.getPictograms().then((response) => {
            setAllPicto(response.data);
        }).catch((err) => {
            console.log("Failed to get all picto: " + err);
        });
    }, []);

    let selectFavPictoCallback = useCallback((picto) => {
        addPictoToFav(picto);
    });
    
    let addPictoToFav = function(picto) {
        UserService.addFavPicto(userId, picto).then((response) => {
            onAddPictoToFav(picto);
            Popup(false, "Pictogramme ajouté aux favoris !");
        }).catch((err) => {
           console.error("Failed to add picto to fav: " + err);
        });
    }

    let isInFavPicto = function(picto) {
        const isInFavPicto = favPictoId.includes(picto.id);
        return isInFavPicto;
    };

    return (
        <View style={style.pictoContainer}>
            <FlatList
                //contentContainerStyle={style.pictoList0}
                columnWrapperStyle={style.pictoList}
                numColumns={9}
                data={allPicto}
                extraData={[favPictoId, isAddingToFav]} // to rerender when thoses variables change
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => 
                    <Pictogram picto={item} isTouchable={true} 
                               onPressHandler={isAddingToFav ? selectFavPictoCallback : selectPictoCallback} 
                               id={"list"} isAddingToFav={isAddingToFav} canAddToFav={!isInFavPicto(item)}/>
                }
            />
        </View>
    )
}

export default PictoContainer;