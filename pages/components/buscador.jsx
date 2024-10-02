import React, { useState } from 'react';
import {TextInput,TouchableHighlight,View,Image } from "react-native";

const lupa = require('../../assets/lupa.png')

const BuscadorComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <View className="bg-white p-4 rounded-lg shadow-md m-4 flex-row justify-center">
        <TextInput
            className="h-10 border border-gray-300 rounded-md p-2 w-60"
            placeholder="Busca aquí..."
            value={searchQuery}
            onChangeText={setSearchQuery}
        />
        <TouchableHighlight className="bg-orange-500 p-2 rounded-md ml-2">
            <Image source={lupa} className="w-7 h-7 " resizeMode="contain" />
        </TouchableHighlight>
    </View>
    )
}

export default BuscadorComponent;