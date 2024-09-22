import { Link } from "expo-router"
import { View, Image, Text, ScrollView } from "react-native";
const inicioImg = require('../assets/inicio.png')
const barra1 = require('../assets/barra1.png')
const logo = require('../assets/Logoprincipal.png')

export function InicioPage() {
    return (
        <ScrollView >
            <View className="flex-1 justify-between min-h-screen">
                <Image source={inicioImg} className="w-full rounded" />
                <Image source={logo} className="absolute mx-60" style={{ top: 255 }} />
                <View className="justify-center items-center">
                    <Text className="w-60 text-orange-500 text-4xl text-center">Bienvenido a ProfeGo</Text>
                    <Text className="text-green-950 text-2xl my-8">¡Apende hoy, lidera mañana!</Text>
                    <Link href={'/login-student'} className="py-3 w-72 rounded-2xl justify-center items-center bg-orange-500 text-center">
                        <Text className="text-white text-2xl p-10">
                            Iniciar sesión
                        </Text>
                    </Link>
                    <Link href={'/register-student'} className="py-3 w-72 rounded-2xl justify-center items-center bg-blue-600 text-center mt-4">
                        <Text className="text-white text-2xl p-10">
                            Registro
                        </Text>
                    </Link>
                </View>
                <Image source={barra1} className="w-full rounded" />
            </View>
        </ScrollView>

    );
}