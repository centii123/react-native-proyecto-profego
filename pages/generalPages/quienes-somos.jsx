
import { View, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from "../components/header";
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')
const elegir = require('../../assets/quienesSomos/elegir.png')
const visionMision = require('../../assets/quienesSomos/visionMision.png')
const valores = require('../../assets/quienesSomos/valores.png')
const historia = require('../../assets/quienesSomos/historia.png')
const QuienesSomos = require('../../assets/quienesSomos/QuienesSomos.png')

export function QuienesSomosPage() {
    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded mb-20" />
                <Image source={barra2} className="w-full rounded mt-60" />
            </View>
            <ScrollView className="min-h-screen">
               
            <Image source={QuienesSomos} style={{width:"100%", height: 200}} resizeMode="contain" className="mt-16" />
            <Image source={visionMision} style={{width:"100%", height: 280}} resizeMode="contain" />
            <Image source={historia} style={{width:"100%", height: 230}} resizeMode="contain" className="mt-4" />
            <Image source={valores} style={{width:"100%", height: 260}} resizeMode="contain" />
            <Image source={elegir} style={{width:"100%", height: 280}} resizeMode="contain" />

            <View className="mb-8"></View>

            </ScrollView>

            <HeaderComponent nombre={'¿Quiénes Somos?'} />
        </View>
    );
}