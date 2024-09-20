import { View, Image, Text, ScrollView } from "react-native";
import { Link } from "expo-router"

export function TareasProyectos() {
    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded mb-20" />
                <Image source={barra2} className="w-full rounded mt-96" />
            </View>
            <ScrollView >
                <View className="w-full flex-row justify-between items-center px-3 mt-9">
                    <Link href={'/docente/perfil'}>
                        <View className="bg-orange-500 rounded-full p-3">
                            <Image source={icono_atras} />
                        </View>
                    </Link>
                    <Text className="text-white text-2xl">Actualizar Perfil</Text>
                    <Image source={logo} style={{ width: 80, height: 60 }} />
                </View>
                
                <View>

                </View>

            </ScrollView>

            <Navegacion />
        </View>
    );
}