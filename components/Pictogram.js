import React from 'react';
import {View, Image, TouchableOpacity} from "react-native";

import pictoStyle from '../style/pages/pictogram.js';
import favPictoStyle from '../style/pages/favPictogram.js';
import selectedPictoStyle from '../style/pages/selectedPictogram.js';

function Pictogram(props) {

    const picto = props.picto;
    const isTouchable = props.isTouchable;
    const isFav = props.isFav;
    const isAddingToFav = props.isAddingToFav;
    const canAddToFav = props.canAddToFav;

    var styles;
    if (!isTouchable){
        styles = selectedPictoStyle;
    } else {
        styles = isFav ? favPictoStyle : pictoStyle;
    }

    if (!isTouchable) {
        return (
            <View style = {styles.main_container}>
                <Image source={{uri: picto.url}} style={styles.images}/>
            </View>
        )
    } else if (isTouchable && isAddingToFav && !canAddToFav) {
        return (
            <TouchableOpacity style={styles.main_container} disabled={true}>
                <Image source={{uri: picto.url}} style={styles.disabled_images}/>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity style={styles.main_container} 
                            onPress={() => props.onPressHandler(picto)}>
                <Image source={{uri: picto.url}} style={styles.images}/>
            </TouchableOpacity>
        )
    }
}

export default Pictogram