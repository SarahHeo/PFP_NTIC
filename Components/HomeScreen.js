import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, Image} from 'react-native'
import {getImageFromDatabase, getPictosFavoriteFromDatabase} from "../API/API_Database";
import Pictogramme from "./Pictogrammes";
import SelectedPictos from "./SelectedPictos";
import SelectedFav from "./SelectedFav";
import FavoritePictos from "./FavoritePictos";
import * as Speech from 'expo-speech';
import {SpeechOptions} from "expo-speech";


let tab1=[];

class HomeScreen extends React.Component {

    // Constructeur permettant de stocker les différentes données des pictogrammes en tant que props
    constructor(props) {
        super(props)
        this.state = { 
            images: [], 
            selectedPicto: "", 
            favorites: [], 
            selectedFav: "" 
        }
    }

    // Fonction permettant de récupérer tous les pictogrammes grâce à l'appel de l'API getImage.php
    async _loadImage(childData) {
        const res = await getImageFromDatabase()
        this.setState({images: res})
    }

    componentDidMount(){
        this._loadImage();
    }

    // Fonction de callback de faire passer des composants entre components enfants et parents
    // Nous utilisons cette fonction pour récupérer le pictogramme sur lequel on a cliquer et le faire passer sur
    // la barre des pictogrammes
    callbackFunction = (childData) => {
        this.setState({selectedPicto: childData})
    }

    // Fonction permettant de récupérer les pictogrammes favoris grâce à l'appel de l'API getFavorite.php
    async _loadFavorite(childData2) {
        const res_fav = await getPictosFavoriteFromDatabase()
        this.setState({favorites: res_fav})
    }
    /* Ici de la même manière qu'avec callbackFunction, nous avons voulu récupérer le pictogrammes favoris sur lequel
    l'utilisateur a cliqué pour le mettre dans la barre des pictogrammes.
    Cependant, comme la barre de pictos est gérer par une flatlist, il aurait fallut passer 2 components dans le
    renderItem mais nous n'avons pas trouver la solution pour réaliser celà */
    callbackFunction2 = (childData2) => {
        this.setState({selectedFav: childData2})
    }

    // Cette fonction permet d'ajouter le pictogramme selectionné à un tableau
    tabUpdate(tab) {
        if (this.state.selectedPicto){
            tab.push(this.state.selectedPicto)
            for (let i=0; i<tab.length; i++) {
                console.log(tab[i].Nom)
            }
            console.log('________________')
        }
    }

    // Cette fonction permet de lire le nom de chaque pictogramme ajouté au tableau. C'est cette fonction qui gère la
    // lecture de la phrase créée. Ceci est possible grâce à la librairie expo-speech
    textToSpeech(tab) {
        if (this.state.selectedPicto){
            tab.push(this.state.selectedPicto)
            for (let i=1; i<tab.length; i++) {
                Speech.speak(tab[i-1].Nom, {language: 'fr'})
            }
        }
    }

    // Comme son nom l'indique cette fonction permet de supprimer le dernier élément ajouté au tableau
    tabDeleteLastElement(tab) {
        tab.pop();
        Speech.stop();
        return tab
    }

    render() {
        this.tabUpdate(tab1);
        return (
            <View style={styles.main_container}>
                <View style={styles.top_container}>
                    <View style={styles.searchBar}>
                        <FlatList
                            numColumns={8}
                            data={tab1}
                            extraData={this.state.selectedPicto}
                            keyExtractor={(item) => item.IDpictogramme.toString()}
                            renderItem={({item}) => <SelectedPictos image={item}/>}/>
                    </View>
                    <TouchableOpacity style={styles.readButton} onPress={() => {this.textToSpeech(tab1)}}>
                        <ImageBackground source={require('../Images/ReadIcone.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => {this.tabDeleteLastElement(tab1)}}>
                        <ImageBackground source={require('../Images/DeleteIcone.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.favButton}>
                        <ImageBackground source={require('../Images/FavIcone.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bot_container}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.favoritePictosContainer} onPress={() => {this._loadFavorite()}}>
                        <FlatList
                            numColumns={1}
                            data={this.state.favorites}
                            keyExtractor={(item) => item.IDfavoris.toString()}
                            renderItem={({item}) => <FavoritePictos favori={item}/>}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.pictos_container} onPress={() => {this._loadImage()}}>
                        <FlatList
                            numColumns={9}
                            data={this.state.images}
                            keyExtractor={(item) => item.IDpictogramme.toString()}
                            renderItem={({item}) => 
                                <Pictogramme parentCallback={this.callbackFunction} image={item}/>
                            }
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 30,
        backgroundColor: '#2a9d8F'
        //borderColor: '#FFFFFF',
        //borderWidth: 2
    },
    top_container: {
        flex: 0.15,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        //borderColor: '#FFFFFF',
        //borderWidth: 2
    },
    bot_container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 110
        //borderColor: '#FFFFFF',
        //borderWidth: 2
    },
    searchBar: {
        flex: 0.8,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-start',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 60,
    },
    selectedPictos: {
        flex : 0.07,
        height: 70,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 120,
        borderWidth: 2,
        borderColor: '#FFFFFF'
    },
    readButton: {
        flex: 0.07,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        backgroundColor: '#F0B0D6',
        borderRadius: 70,
        elevation: 10
    },
    deleteButton: {
        flex: 0.07,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        backgroundColor: '#ff4b4b',
        borderRadius: 70,
        elevation: 10
    },
    favButton: {
        flex: 0.07,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ffb036',
        borderRadius: 70,
        elevation: 10
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.8,
    },
    favoritePictosContainer: {
        flex: 0.11,
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 70
    },
    favoritePictos: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 70
    },
    pictos_container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 15,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 30
    },
    pressIcone: {
        flex: 1,
        marginTop: 230,
        marginLeft: 300,
        width: '45%',
        height: '45%',
        opacity: 0.8,
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    test: {
        resizeMode: 'contain',
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 200
    }
})

export default HomeScreen