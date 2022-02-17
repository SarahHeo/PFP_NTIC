import React from "react"
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";



class Pictogramme extends React.Component {

    // Fonction permettant de selectionner 1 pictogramme
    _currentPicto () {
        const selectedPicto = this.props.image
        this.props.parentCallback(selectedPicto)
        }

    render() {
        const image = this.props.image
        return (
            <TouchableOpacity style = {styles.main_container} onPress={() => {this._currentPicto()}}>
                <Image source={{uri: image.url}} style={styles.images}/>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    main_container : {
        flex : 0.2,
        margin : 10,
        height: 150,
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

export default Pictogramme