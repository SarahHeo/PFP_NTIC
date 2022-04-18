import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import pictoStyle from '../styles/components/pictogram.jsx';
import listPictoStyle from '../styles/components/listPictogram.jsx';
import favPictoStyle from '../styles/components/favPictogram.jsx';
import selectedPictoStyle from '../styles/components/selectedPictogram.jsx';
import favScreenPictogram from '../styles/components/favScreenPictogram.jsx';

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