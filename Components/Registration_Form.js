import React, { useState, useEffect, useCallback }  from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'

import styles from '../style/registrationForm.js';

function RegistrationForm() {

    // Constructeur permettant de stocker les différentes données des pictogrammes en tant que props
    const [name, setName] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const [dateOfBirth, setDateOfBirth] = useState([]);
    const [gender, setGender] = useState([]);

    const [proName, setProName] = useState([]);
    const [proFirstName, setProFirstName] = useState([]);
    const [proEmail, setProEmail] = useState([]);
    const [proPassword, setProPassword] = useState([]);
    const [proConfirmedPassword, setProConfirmedPassword] = useState([]);

    // On récupère les données entrées par l'utilisateur et les envoies à la base de données
    let submitForm = function() {

        if (name.length===0 || firstName.length===0 || dateOfBirth.length===0 || gender.length===0 
            || proName.length===0 || proFirstName.length===0 || proEmail.length===0 || proPassword.length===0 
            || proConfirmedPassword.length===0) {
            alert("Erreur: Veuillez renseigner tous les champs.")
        }
        else if (proPassword !== proConfirmedPassword) {
            alert("Erreur: Les mots de passe ne correspondent pas.")
        }
        else {

            const InsertAPIURL="http://10.0.2.2:80/API/insert.php";
            const headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            // faudra changer le nom des champs en anglais, et que ça corresponde à insert.php
            const data = {
                IDpatient: '',
                IDmedecin: '',
                NomPatient: name,
                PrenomPatient: firstName,
                DateOfBirth: dateOfBirth,
                Sexe: gender,
                NomMedecin: proName,
                PrenomMedecin: proFirstName,
                Email: proEmail,
                MotDePasse: proPassword
            };

            fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body: JSON.stringify(data)
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

            this.props.navigation.navigate("ConfirmationScreen"); // ?? A remplacer
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleText}>Inscription</Text>
            <View style={styles.formContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.litleTitle}>Informations de l'utilisateur</Text>
                    <View style={styles.textinputContainer}>
                        <TextInput style={styles.textinput} placeholder = "Nom" onChangeText={newName => setName(newName)}/>
                        <TextInput style={styles.textinput} placeholder = "Prénom" onChangeText={newFirstName => setFirstName(newFirstName)}/>
                        <TextInput style={styles.textinput} placeholder = "Date de naissance" onChangeText={newDateOfBirth => setDateOfBirth(newDateOfBirth)}/>
                        <TextInput style={styles.textinput} placeholder = "Sexe" onChangeText={newGender => setGender(newGender)}/>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.litleTitle}>Informations de l'éducateur</Text>
                    <View style={styles.textinputContainer}>
                        <TextInput style={styles.textinput} placeholder = "Nom" onChangeText={newName => setProName(newName)}/>
                        <TextInput style={styles.textinput} placeholder = "Prénom" onChangeText={newFirstName => setProFirstName(newFirstName)}/>
                        <TextInput style={styles.textinput} placeholder = "Adresse mail" onChangeText={newEmail => setProEmail(newEmail)}/>
                        <TextInput style={styles.textinput} placeholder = "Mot de passe" onChangeText={newPassword => setProPassword(newPassword)} secureTextEntry={true}/>
                        <TextInput style={styles.textinput} placeholder = "Confirmation du mot de passe" onChangeText={newPassword => setProConfirmedPassword(newPassword)} secureTextEntry={true}/>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.submitButton} onPress={() => submitForm()}>
                    <Text style={styles.textButton}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegistrationForm;