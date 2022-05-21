import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';

import soundIcon from '../../images/sound.png';
import deleteIcon from '../../images/delete.png';
import favIcon from '../../images/fav.png';
import style from '../../styles/screens/home.jsx';
import globalStyle from '../../styles/components/global.jsx';



function ButtonsContainer(props) {

    const [allPicto, setAllPicto] = useState([]);
    const handleReadSentence = props.handleReadSentence;
    const handleRemovePicto = props.handleRemovePicto;
    const handleAddSentenceToFav = props.handleAddSentenceToFav;

    return (
        <View style={style.buttonsContainer}>
            <TouchableOpacity style={[globalStyle.readButton, style.button]} onPress={() => {handleReadSentence()}}>
                <Image source={soundIcon} style={globalStyle.buttonImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.deleteButton, style.button]} onPress={() => {handleRemovePicto()}}>
                <Image source={deleteIcon} style={globalStyle.deleteImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.favButton, style.button]} onPress={() => {handleAddSentenceToFav()}}>
                <Image source={favIcon} style={globalStyle.buttonImage}/>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonsContainer;