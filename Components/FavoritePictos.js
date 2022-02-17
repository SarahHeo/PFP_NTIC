import React from "react"
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";



class FavoritePictos extends React.Component {

    _currentPicto2 () {
        const selectedFav = this.props.favori
        this.props.parentCallback2(selectedFav)
    }

    render() {
        const favori = this.props.favori
        return (
            <TouchableOpacity style = {styles.main_container} onPress={() => {}}>
                <Image source={{uri: favori.url}} style={styles.images}/>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    main_container : {
        flex : 0.2,
        margin : 5,
        height: 110,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 120
    },
    images : {
        resizeMode: 'contain',
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 200
    }
})

export default FavoritePictos