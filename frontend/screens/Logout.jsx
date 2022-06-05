import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { deleteToken } from '../services/AuthenticationService.jsx';


let disconnect = async function(){
    await deleteToken();
}

function Logout({navigation}) {

    useEffect(() => {
        disconnect();
        navigation.navigate("Users");
    },[])

    return (
        <View>
            <Text></Text>
        </View>
        
    );
}

export default Logout;