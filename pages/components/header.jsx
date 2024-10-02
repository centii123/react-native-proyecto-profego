import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logo = require('../../assets/Logoprincipal.png')
const x_icon = require('../../assets/x.png')

const HeaderComponent = ({nombre}) => {
    const navigation = useNavigation();
    return (
        <View className="w-full flex-row justify-between items-center px-3 absolute py-3 bg-orange-400">
            <Image source={logo} style={{ width: 52, height: 40 }} />
            <Text className="text-white text-2xl">{nombre}</Text>
            <View onTouchEnd={() => navigation.goBack()}>
                <Image source={x_icon} />
            </View>
        </View>
    );
};

export default HeaderComponent;