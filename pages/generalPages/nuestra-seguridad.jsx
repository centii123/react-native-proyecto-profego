import { View, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from "../components/header";
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const seguridad1 = require('../../assets/seguridad/seguridad1.png')
const seguridad = require('../../assets/seguridad/seguridad.png')
const seguridad2 = require('../../assets/seguridad/seguridad2.png')
const seguridad3 = require('../../assets/seguridad/seguridad3.png')
const seguridad4 = require('../../assets/seguridad/seguridad4.png')
const seguridad5 = require('../../assets/seguridad/seguridad5.png')


export function NuestraSeguridadPage() {
    return (
        <View className="flex-1">
            <ScrollView className="min-h-screen">
                <Image source={seguridad} style={{ width: "100%", height: 70 }} resizeMode="contain" className="mt-20" />
                <Image source={seguridad1} style={{ width: "100%", height: 375 }} resizeMode="contain" />
                <Image source={seguridad2} style={{ width: "100%", height: 570 }} resizeMode="contain" className="mt-6"/>
                <Image source={seguridad3} style={{ width: "100%", height: 540 }} resizeMode="contain" />
                <Image source={seguridad4} style={{ width: "100%", height: 120 }} resizeMode="contain" />
                <Image source={seguridad5} style={{ width: "100%", height: 220 }} resizeMode="contain" className="mb-10"/>
            </ScrollView>

            <HeaderComponent nombre={'Nuestra Seguridad'} />
        </View>
    );
}