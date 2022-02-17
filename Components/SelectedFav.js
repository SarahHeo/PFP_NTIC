import React from "react"
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";

class SelectedFav extends React.Component {

    render() {
        const favori = this.props.favori
        return (
            <View style = {styles.main_container}>
                <Image source={{uri: favori.url}} style={styles.images}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container : {
        flex : 0.07,
        margin : 2,
        height: 73,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 90,
    },
    images : {
        resizeMode: 'contain',
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 200
    }
})

export default SelectedFav