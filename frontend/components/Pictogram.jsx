import React from 'react';
import { View, Image, TouchableOpacity} from "react-native";
import pictoStyle from '../styles/components/pictogram.jsx';
import favPictoStyle from '../styles/components/favPictogram.jsx';
import selectedPictoStyle from '../styles/components/selectedPictogram.jsx';

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

export default Pictogram;