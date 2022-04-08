import React, { useState, useEffect, useCallback } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";

import pictoStyle from '../style/pages/pictogram.js';
import favPictoStyle from '../style/pages/favPictogram.js';
import selectedPictoStyle from '../style/pages/selectedPictogram.js';

function Pictogram(props) {

    const picto = props.picto;
    const isTouchable = props.isTouchable;
    const isFav = props.isTouchable;

    var styles;
    if (!isTouchable){
        styles = selectedPictoStyle;
    } else {
        styles = isFav ? favPictoStyle : pictoStyle;
    }
    
    return (
        <>
            {isTouchable &&
                <TouchableOpacity style={styles.main_container} 
                                onPress={() => props.onPressHandler(picto)}>
                    <Image source={{uri: picto.url}} style={styles.images}/>
                </TouchableOpacity>
            }
            
            {!isTouchable &&
                <View style = {styles.main_container}>
                    <Image source={{uri: picto.url}} style={styles.images}/>
                </View>
            }
        </>
    )
}

export default Pictogram