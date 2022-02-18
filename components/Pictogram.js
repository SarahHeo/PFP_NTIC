import React, { useState, useEffect, useCallback } from 'react';
import pictoStyle from '../style/pictogram.js';
import favPictoStyle from '../style/favPictogram.js';

import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";


function Pictogram(props) {

    const picto = props.picto;
    const styles = props.isFav ? favPictoStyle : pictoStyle;

    return (
        <TouchableOpacity style={styles.main_container} 
                          onPress={() => props.onPressHandler(picto)}>
            <Image source={{uri: picto.url}} style={styles.images}/>
        </TouchableOpacity>
    )
}

export default Pictogram