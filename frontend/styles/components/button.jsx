import { StyleSheet } from 'react-native';

const button = {
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 70,
    elevation: 10
}

const imageButton = {
    textAlign:'center',
    resizeMode: 'contain',
    opacity: 0.8
}

export default StyleSheet.create({  

    deleteButton: {
        backgroundColor: '#ff4b4b',
        ...button
    },

    readButton: {
        backgroundColor: '#F0B0D6',
        ...button
    },

    favButton: {
        backgroundColor: '#ffb036',
        ...button
    },

    buttonImage: {
        width: "60%",
        height: "60%",
        ...imageButton
    },

    deleteImage: {
        width: "50%",
        height: "50%",
        ...imageButton
    }

});
