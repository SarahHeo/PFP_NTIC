import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';

import PictogramService from '../../services/PictogramService.jsx';
import CategoryService from '../../services/CategoryService.jsx';
import UserService from '../../services/UserService.jsx';
import Pictogram from "../Pictogram.jsx";
import Popup from "../Popup.jsx";

import { clearWord } from "../../utils/clearWord.jsx"

import style from '../../styles/screens/home.jsx';
import globalStyle from '../../styles/components/global.jsx';
import backIcon from "../../images/back.png";

function PictoContainer(props) {

    //const [allPicto, setAllPicto] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isCategoryOpened, setIsCategoryOpened] = useState(false);
    const [pictoOfCategory, setPictoOfCategory] = useState([]);

    const isAddingToFav = props.isAddingToFav;
    const favPictoId = props.favPictoId;
    const selectPictoCallback = props.selectPictoCallback;
    const onAddPictoToFav = props.onAddPictoToFav;
    const userId = props.userId;
    const favPicto = props.favPicto;
    const predictPicto = props.predictPicto;

    /*useEffect(function loadAllPicto(){
        PictogramService.getPictograms().then((response) => {
            setAllPicto(response.data);
        }).catch((err) => {
            console.log("Failed to get all picto: " + err);
        });
    }, [isAddingToFav, favPicto, predictPicto]);*/

    useEffect(function loadAllCategories(){
        CategoryService.getCategories().then((response) => {
            setCategories(response.data);
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

    let isInPredictPicto = function(picto) {
        const isInPredictPicto = predictPicto.map(picto => picto.word).includes(clearWord(picto.name));
        return isInPredictPicto;
    }
    
    let openPictoList = function(category){
        setIsCategoryOpened(true);

        PictogramService.getPictoByCategory(category.id).then((response) => {
            setPictoOfCategory(response.data);
        }).catch((err) => {
           console.error("Failed to get picto of selected category: " + err);
        });
    }

    let returnToCatogories = function(){
        setIsCategoryOpened(false);
    }

    const returnButton = () => {
        return (
            <View style={style.backButtonContainer}>
                <TouchableOpacity style={[globalStyle.returnButton, style.returnButton]} onPress={() => {returnToCatogories()}}>
                    <Image source={backIcon} style={globalStyle.buttonImage}/>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={style.pictoContainer}>
            { !isCategoryOpened && 
                <FlatList
                    //contentContainerStyle={style.pictoList0}
                    columnWrapperStyle={style.pictoList}
                    numColumns={6}
                    data={categories}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => 
                        <Pictogram picto={item} id={"categories"} isTouchable={true} 
                                   onPressHandler={() => openPictoList(item)}/>
                    }
                />
            }

            { isCategoryOpened && 
                <FlatList
                    //contentContainerStyle={style.pictoList0}
                    columnWrapperStyle={style.pictoList}
                    numColumns={9}
                    data={pictoOfCategory}
                    ListHeaderComponent={returnButton}
                    ListHeaderComponentStyle={{}}
                    extraData={[favPictoId, isAddingToFav]} // to rerender when thoses variables change
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => 
                        <Pictogram picto={item} isTouchable={true} 
                                onPressHandler={isAddingToFav ? selectFavPictoCallback : selectPictoCallback} 
                                id={"list"} isAddingToFav={isAddingToFav} canAddToFav={!isInFavPicto(item)}/>
                    }
                />
            }
            
        </View>
    )
}

export default PictoContainer;