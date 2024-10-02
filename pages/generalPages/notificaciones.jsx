import { View, Image, Text, ScrollView, TouchableHighlight } from "react-native";
import { useState } from "react";
const logo = require('../../assets/Logoprincipal.png')
const logoMensaje = require('../../assets/mensaje.png')
const mensajecerrado = require('../../assets/mensajecerrado.png')
const mensajeIcone = require('../../assets/mensajeIcone.png')

export function NotificacionesPage() {
    const [isVisible, setIsVisible] = useState(false);
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

                    <TouchableHighlight
                    underlayColor={'#F0C491'}
                        onPress={() => setIsVisible(!isVisible)}
                        className="mx-2 px-2 py-2 rounded-lg mb-1 border-orange-500 border-2  bg-white">
                        <View className="flex-row items-center">
                            <Image source={logoMensaje} style={{ width: 50, height: 50 }} className="mr-4 ml-1" />
                            <View >
                                <Text className="text-base mb-3 w-60 text-orange-700">{'Titulo de la notificacion dff sdf dsfs df dsfsd fsdf'.slice(0, 33)}... </Text>
                                <Text className="text-slate-700 mb-1">Publicacion: 07-08-2001  13:30</Text>
                                <Text className="w-60">{'Descripcion de la notificacion gdfgfdgdfgdf gdf gdfg dfg dfg dfg dfg dfg dfg dfg dfg dfg fd gdfg dfg dfgdf gdf gdfg dfg dfg dfg dfg dfg'.slice(0, 50)}...</Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                    underlayColor={'#F0C491'}
                        onPress={() => setIsVisible(!isVisible)}
                        className="mx-2 px-2 py-2 rounded-lg mb-1 border-orange-500 border-2  bg-slate-200">
                        <View className="flex-row items-center">
                            <Image source={mensajecerrado} style={{ width: 50, height: 40 }} className="mr-4 ml-1" />
                            <View >
                                <Text className="text-base mb-3 w-60 text-orange-700">{'Titulo de la notificacion dff sdf dsfs df dsfsd fsdf'.slice(0, 33)}...</Text>
                                <Text className="text-slate-700 mb-1">Publicacion: 07-08-2001  13:30</Text>
                                <Text className="w-60">{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus soluta animi reprehenderit deleniti id perspiciatis, impedit sequi voluptates vitae rem quos, et assumenda officiis nobis velit nihil, harum exercitationem!'.slice(0, 50)}...</Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                </View>
            </ScrollView>

            {/* Modal */}
            <View className={`${isVisible ? '' : 'hidden'} absolute h-96 bg-white border-2 border-orange-500 rounded-lg top-28 w-80`} style={{marginLeft:'7%'}}>
                <View className="flex-row justify-between items-center mx-4">
                    <View className="flex-row items-center">
                        <Image source={logoMensaje} style={{ width: 30, height: 30 }} className="mr-4 ml-1" />
                        <Text className="text-center text-2xl text-orange-700 my-3">Mensaje</Text>
                    </View>

                    <TouchableHighlight
                        underlayColor={'#F29224'}
                        onPress={() => setIsVisible(!isVisible)}
                        className="rounded-lg h-8 w-8 justify-center items-center"
                    >
                        <Text className="text-2xl text-black">x</Text>
                    </TouchableHighlight>

                </View>
                <View className="h-1 bg-orange-500"></View>
                <ScrollView>
                    <Text className="text-base text-center text-orange-600 mx-4 mt-5">Titulo de la notificacion dff sdf dsfs df dsfsd fsdf</Text>
                    <Text className="mx-4 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, quaerat veniam! Rem officiis cum sunt corrupti magni assumenda, non qui inventore culpa ad soluta itaque odio a autem deserunt aliquid.</Text>
                </ScrollView>
            </View>
            {/* End-Modal */}
        </View>
    );
}