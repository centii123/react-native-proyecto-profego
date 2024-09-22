import { View, Image, Text, ScrollView } from "react-native";

const logo = require('../../assets/Logoprincipal.png')
const logoMensaje = require('../../assets/mensaje.png')
const mensajeIcone = require('../../assets/mensajeIcone.png')

export function NotificacionesPage() {
    return (
        <View className="flex-1">
            <ScrollView className="min-h-full">
                <View className="w-full flex-row justify-between items-center px-4 py-5 bg-blue-500">
                    <View className="flex-row justify-center items-center">
                        <Image source={mensajeIcone} style={{ width: 30, height: 30 }} className="mr-2" />
                        <Text className="text-2xl text-white">Notificaciones</Text>
                    </View>
                    
                    <Image source={logo} style={{ width: 65, height: 50 }} />
                </View>
                <View className="mt-5 mb-10">
                    <View className="mx-2 px-2 py-2 rounded-lg mb-3 border-orange-500 border-2 flex-row items-center">
                        <Image source={logoMensaje} style={{ width: 50, height: 50 }} className="mr-4 ml-1"/>
                        <View >
                            <Text className="text-xl mb-3 w-60 text-orange-700">Titulo de la notificacion dff sdf dsfs df dsfsd fsdf </Text>
                            <Text className="text-slate-700 mb-1">Publicacion: 07-08-2001  13:30</Text>
                            <Text className="w-60">Descripcion de la notificacion gdfgfdgdfgdf gdf gdfg dfg dfg dfg dfg dfg dfg dfg dfg dfg fd gdfg dfg dfgdf gdf gdfg dfg dfg dfg dfg dfg</Text>
                        </View>

                    </View>
                    
                </View>
            </ScrollView>
        </View>
    );
}