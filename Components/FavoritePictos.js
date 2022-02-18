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

})

export default FavoritePictos