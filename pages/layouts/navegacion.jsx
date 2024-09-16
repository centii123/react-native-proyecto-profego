import { Link } from "expo-router"
import { View, Image, Text } from "react-native";
//navegacion
const navegacion1 = require('../../assets/navegacion1.png')
const navegacion2 = require('../../assets/navegacion2.png')
const navegacion3 = require('../../assets/navegacion3.png')
const navegacion4 = require('../../assets/navegacion4.png')

//loadImg

export function Navegacion() {
    return (
        <View className="w-full absolute bg-blue-700 top-3/4 flex-row justify-around py-4 mt-36 items-center">
                <Link href={'/'} >
                    <View className="items-center justify-center">
                        <Image source={navegacion1} />
                        <Text className="text-white">Inicio</Text>
                    </View>
                </Link>
                <Link href={'/'}>
                    <View className="items-center justify-center">
                        <Image source={navegacion2}/>
                        <Text className="text-white">Mis servicios</Text>
                    </View>
                </Link>
                <Link href={'/'}>
                    <View className="items-center justify-center">
                        <Image source={navegacion3}/>
                        <Text className="text-white">Notificaciones</Text>
                    </View>

                </Link>
                <Link href={'/docente/perfil'}>
                    <View className="items-center justify-center">
                        <Image source={navegacion4}/>
                        <Text className="text-white">Mi perfil</Text>
                    </View>

                </Link>
            </View>


    );
}