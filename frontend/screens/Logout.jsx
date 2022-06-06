import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { clearStorage } from '../services/AuthenticationService.jsx';


let disconnect = async function(){
    await clearStorage();
}

function Logout({route, navigation}) {

    const isAdmin = route.params.isAdmin;

    useEffect(() => {
        disconnect();
        if (isAdmin) {
            navigation.navigate("LogIn");
        } else {
            navigation.navigate("Users");
        }
    },[])

    return (
        <View>
            <Text></Text>
        </View>
        
    );
}

export default Logout;