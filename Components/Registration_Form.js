import React from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'

class Registration_Form extends React.Component {

    // Constructeur permettant de stocker les différentes données des pictogrammes en tant que props
    constructor(props) {
        super();
        this.state = {
            NomPatient:'',
            PrenomPatient:'',
            Age:'',
            Sexe:'',
            NomMedecin:'',
            PrenomMedecin:'',
            Email:'',
            MotDePasse:'',
            MotDePasse2:'',
        }
    }

    // On récupère les données entrées par l'utilisateur et les envoies à la base de données
    submitForm() {
        const NomPatient = this.state.NomPatient;
        const PrenomPatient=this.state.PrenomPatient;
        const Age=this.state.Age;
        const Sexe=this.state.Sexe;
        const NomMedecin=this.state.NomMedecin;
        const PrenomMedecin=this.state.PrenomMedecin;
        const Email=this.state.Email;
        const MotDePasse=this.state.MotDePasse;
        const MotDePasse2=this.state.MotDePasse2;

        if(NomPatient.length===0 || PrenomPatient.length===0 || Age.length===0 || Sexe.length===0 || NomMedecin.length===0 || PrenomMedecin.length===0 || Email.length===0 || MotDePasse.length===0 || MotDePasse2.length===0) {
            alert("ERREUR : Veuillez Remplir Tous Les Champs")
        }
        else if (MotDePasse !== MotDePasse2) {
            alert("ERREUR : Mots De Passe Incohérents")
        }
        else {

            const InsertAPIURL="http://10.0.2.2:80/API/insert.php";
            const headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            const Data={
                IDpatient: '',
                IDmedecin: '',
                NomPatient: NomPatient,
                PrenomPatient: PrenomPatient,
                Age: Age,
                Sexe: Sexe,
                NomMedecin: NomMedecin,
                PrenomMedecin: PrenomMedecin,
                Email: Email,
                MotDePasse: MotDePasse
            };

            fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body: JSON.stringify(Data)
                })
                .then((response) => response.json())
                .then((response) =>
                {
                    alert(response[0].Message);
                })
                .catch((error) =>
                {
                    alert("Error" + error)
                })

            this.props.navigation.navigate("ConfirmationScreen")
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.titleText}>Formulaire d'inscription</Text>
                <View style={styles.formContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.litleTitle}>Informations de l'utilisateur</Text>
                        <View style={styles.textinputContainer}>
                            <TextInput style={styles.textinput} placeholder = "Nom" onChangeText={NomPatient => this.setState({NomPatient})}/>
                            <TextInput style={styles.textinput} placeholder = "Prenom" onChangeText={PrenomPatient => this.setState({PrenomPatient})}/>
                            <TextInput style={styles.textinput} placeholder = "Age" keyboardType={"numeric"} onChangeText={Age => this.setState({Age})}/>
                            <TextInput style={styles.textinput} placeholder = "Sexe" onChangeText={Sexe => this.setState({Sexe})}/>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.litleTitle}>Informations de l'éducateur</Text>
                        <View style={styles.textinputContainer}>
                            <TextInput style={styles.textinput} placeholder = "Nom" onChangeText={NomMedecin => this.setState({NomMedecin})}/>
                            <TextInput style={styles.textinput} placeholder = "Prenom" onChangeText={PrenomMedecin => this.setState({PrenomMedecin})}/>
                            <TextInput style={styles.textinput} placeholder = "Email" onChangeText={Email => this.setState({Email})}/>
                            <TextInput style={styles.textinput} placeholder = "Mot de passe" onChangeText={MotDePasse => this.setState({MotDePasse})} secureTextEntry={true}/>
                            <TextInput style={styles.textinput} placeholder = "Confirmer mot de passe" onChangeText={MotDePasse2 => this.setState({MotDePasse2})} secureTextEntry={true}/>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => {this.submitForm()}}>
                        <Text style={styles.textButton}> S'inscire </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        fontFamily: 'Roboto',
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    textinputContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 15,
        borderLeftWidth: 1,
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    litleTitle: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    textinput: {
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center',
        height: 40,
        backgroundColor: '#e0e0e0',
        borderColor: '#000000',
        borderWidth: 0.8,
        borderRadius: 20,
        elevation: 5,
        fontSize: 20,
    },
    buttonContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'

    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0B0D6',
        borderRadius: 20,
        height: 40,
        width: 150,
        elevation: 5,
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})

export default Registration_Form