import React from 'react';
import { Link } from "expo-router"
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const logo = require('../../assets/Logoprincipal.png')
const x_icon = require('../../assets/x.png')
const flecha = require('../../assets/flecha.png')

const HeaderComponent = ({ url }) => {
    const navigation = useNavigation();
    return (
        <View className="w-full flex-row justify-between items-center px-3 absolute py-3 bg-orange-400">
            <View onTouchEnd={() => navigation.goBack()}>
                <Image source={flecha} style={{ width: 52, height: 40 }} />
            </View>
            <Image source={logo} style={{ width: 52, height: 40 }} />
            <Link href={`${url}`}>
                <View>
                    <Image source={x_icon} />
                </View>
            </Link>

        </View>
    );
};

export default HeaderComponent;