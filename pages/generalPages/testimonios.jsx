import { Link } from "expo-router"
import { View, Image, Text, ScrollView } from "react-native";
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')
const logo = require('../../assets/Logoprincipal.png')
const x_icon = require('../../assets/x.png')



export function TestimoniosPage() {
    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded mb-20" />
                <Image source={barra2} className="w-full rounded mt-96" />
            </View>
            <ScrollView > 
        

            </ScrollView>
            <View className="w-full flex-row justify-between items-center px-3 absolute mt-5">
                <Image source={logo} style={{ width: 80, height: 60 }} />
                <Text className="text-white text-2xl">Testimonios</Text>
                <Link href={'/docente/perfil'}>
                    <View>
                        <Image source={x_icon} />
                    </View>
                </Link>
            </View>
        </View>
    );
}