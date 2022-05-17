import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Picker, Button, Text, Modal } from "react-native";
import AuthenticationService from "../services/AuthenticationService.jsx";
import UserService from "../services/UserService.jsx";
import styles from '../styles/screens/users.jsx'
import EducatorService from "../services/EducatorService.jsx";
import Form from '../components/Form.jsx';
import {validateContent } from '../validators/authenticationValidator.jsx';

function Users({navigation}){
    const [selectedValue, setSelectedValue] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [educatorId, setEducatorId] = useState('');
    const [usersOfEducator, setUsersOfEducator] = useState([]);
    const [usersLeft, setUsersLeft] = useState([]);

    useEffect(() => {

        AuthenticationService.getCurrent().then((response) => {
            setEducatorId(response.data.id);
            
            EducatorService.getUsersByEducator(response.data.id).then((educatorUsers) => {
                setUsersOfEducator(educatorUsers.data);
                console.log("Users of educator:", educatorUsers.data);

                UserService.getUsers().then((users) => {
                    setUsersLeft(users.data.filter(user => !educatorUsers.data.map(user => user.Id).includes(user.Id)));
                }).catch((err) => {
                    console.log("Failed to get current educator: " + err);
                });

            }).catch((err) => {
                console.log("Failed to get users of current educator: " + err);
            })
        }).catch((err) => {
            console.log("Failed to get current educator: " + err);
        });     

    }, []);

    const addUserToEducator = () => {
        EducatorService.addUser({
            idEducator: educatorId,
            idUser: selectedValue
        }).then(console.log("User successfully added!"))
        .catch((err) => {
            console.log("Failed to add user: " + err);
        });
    }

    const handleResult = async (result) => {
        setModalVisible(false);
        if (result.data) {
            console.log(result.data)
        } else if (result.status === 401) {
            throw new Error('Invalid data.');
        } else {
            throw new Error('Something went wrong.');
        }
    }

    const setUserId = async (userId) => {
        try {
            await AsyncStorage.removeItem('@user_id');
            await AsyncStorage.setItem('@user_id', JSON.stringify(userId));
            console.log("Storing id: " + await AsyncStorage.getItem('@user_id'));
            navigation.navigate("Home");
        } catch (e) {
            return null;
        }
    }

    return(
        <View style = {styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <Form
                        title="Créer un nouvel utilisateur"
                        action={UserService.addUser}
                        afterSubmit={handleResult}
                        buttonText="Créer l'utilisateur"
                        fields={{
                            Name: {
                                label: 'Nom',
                                validators: [validateContent]
                            },
                            FirstName: {
                                label: 'Prénom',
                                validators: [validateContent]
                            },
                            DateOfBirth: {
                                label: 'Date de naissance',
                                validators: [validateContent]
                            },
                            Gender: {
                                label: 'Sexe',
                                validators: [validateContent]
                            }
                        }}
                    />
                    <Button
                        title="Annuler"
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </View>
            </Modal>
            <View style = {styles.listContainer}>
                <Text style = {styles.title}>Liste des patients</Text>
                {usersOfEducator.map(user =>
                        <View 
                            style={styles.buttonContainer}
                            key={user.Id} >
                                <Button
                                title={`${user.FirstName} ${user.Name}`}
                                onPress={() => setUserId(user.Id)}
                                />
                        </View>
                    )                
                }
            </View>
            <View style={styles.pickerContainer}>
                {usersLeft.length !== 0 &&
                <View>
                    <Picker
                        selectedValue = {selectedValue}
                        onValueChange = {(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    {usersLeft.map(user =>
                            <Picker.Item
                                label={user.FirstName}
                                key={user.Id}
                                value={user.Id}
                            />
                        )   
                    }
                    </Picker>
                    <Button title="Prendre en charge le patient" onPress={addUserToEducator}/>
                </View>
                }
                <Button title="Créer un nouvel utilisateur" onPress={() => setModalVisible(true)}/>
            </View>
        </View>
    )

}

export default Users;