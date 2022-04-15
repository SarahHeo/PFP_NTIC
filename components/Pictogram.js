import React, { useState, useEffect, useCallback } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";

import pictoStyle from '../style/components/pictogram.js';
import listPictoStyle from '../style/pages/listPictogram.js';
import favPictoStyle from '../style/pages/favPictogram.js';
import selectedPictoStyle from '../style/pages/selectedPictogram.js';
import favScreenPictogram from '../style/pages/favScreenPictogram.js';

function Pictogram(props) {

    const picto = props.picto;
    const isTouchable = props.isTouchable;
    const id = props.id;

    var style;

    switch (id) {
        case "list":
            style = listPictoStyle;
            break;
        case "fav":
            style = favPictoStyle;
            break;
        case "selected":
            style = selectedPictoStyle;
            break;
        case "favScreen":
            style = favScreenPictogram;
            break;
        default:
            style = listPictoStyle;
    }
    
    return (
        <>
            <TouchableOpacity style={[pictoStyle.mainContainer, style.mainContainer]} disabled={!isTouchable}
                                onPress={() => props.onPressHandler(picto)}>
                <Image source={{uri: picto.url}} style={pictoStyle.image}/>
            </TouchableOpacity>
        </>
    )
}

export default Pictogram;