import React, { useState, useEffect, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View, Button, SafeAreaView } from 'react-native';
import globalStyle from '../styles/components/global.jsx';

import CustomPictogramURL from './CustomPictogramURL.jsx';
import CustomPictogramCamera from './CustomPictogramCamera.jsx';
import CustomPictogramPicker from './CustomPictogramPicker.jsx';

function CustomChoice({navigation}) {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style = {{marginHorizontal:30, marginTop: 30}}>
            <Button title="Via une URL" onPress={() => setSelectedTab(0)}/>
            <Button title="Via une nouvelle photo" onPress={() => setSelectedTab(1)}/>
            <Button title="Via une photo déjà existante" onPress={() => setSelectedTab(2)}/>

            <View>
                {selectedTab == 0 && <CustomPictogramURL/>}
                {selectedTab == 1 && <CustomPictogramCamera/>}
                {selectedTab == 2 && <CustomPictogramPicker/>}
            </View>
        </View>
    )
}

export default CustomChoice;