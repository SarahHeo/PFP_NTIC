import React, { useState, useEffect, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import styles from '../styles/screens/settings.jsx';
import globalStyle from '../styles/components/global.jsx';

import Custom1 from './Custom1.jsx';
import Custom2 from './Custom2.jsx';
import Custom3 from './Custom3.jsx';

function CustomChoice({navigation}) {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View>
            <View style={{margin: 50, borderWidth: 2}}>
                <Text>Avec screens</Text>
                <Button title="Méthode 1" onPress={() => navigation.navigate('Custom1')}/>
                <Button title="Méthode 2" onPress={() => navigation.navigate('Custom2')}/>
                <Button title="Méthode 3" onPress={() => navigation.navigate('Custom3')}/>
            </View>
            <View style={{margin: 50, borderWidth: 2}}>
                <Text>Avec boutons</Text>
                <Button title="Méthode 1" onPress={() => setSelectedTab(0)}/>
                <Button title="Méthode 2" onPress={() => setSelectedTab(1)}/>
                <Button title="Méthode 3" onPress={() => setSelectedTab(2)}/>

                <View style={{margin: 50, borderWidth: 2, textAlign: "center"}}>
                    {selectedTab == 0 && <Custom1/>}
                    {selectedTab == 1 && <Custom2/>}
                    {selectedTab == 2 && <Custom3/>}
                </View>
            </View>

        </View>

    )
}

export default CustomChoice;