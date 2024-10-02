
import { View, Image, ScrollView } from "react-native";
import HeaderComponent from "../components/header";
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const titulo = require('../../assets/comoFunciona/titulo.png')
const estudiante = require('../../assets/comoFunciona/estudiante.png')
const docente =require('../../assets/comoFunciona/docente.png')
const calificacion =require('../../assets/comoFunciona/calificacion.png')
const calificacionOpciones =require('../../assets/comoFunciona/calificacionOpciones.png')

export function ComoFuncionaPage() {
    return (
        <View className="flex-1">
            
            <ScrollView className="min-h-screen">
                <Image source={titulo} style={{ width: "100%", height: 50 }} resizeMode="contain"  className="mt-20" />
                <Image source={estudiante} style={{ width: "100%", height: 350 }} resizeMode="contain" />
                <Image source={docente} style={{ width: "100%", height: 500 }} resizeMode="contain" />
                <Image source={calificacion} style={{ width: "100%", height: 130 }} resizeMode="contain" />
                <Image source={calificacionOpciones} style={{ width: "100%", height: 200 }} resizeMode="contain" className="mb-10"/>
            </ScrollView>
            <HeaderComponent nombre={'¿Como Funciona?'} />
            
        </View>
    );
}