import { Link } from "expo-router"
import { useState } from "react";
import { View, Image, Text, ScrollView, Dimensions, TouchableHighlight } from "react-native";
import HeaderComponent from "../components/header";
import BuscadorComponent from "../components/buscador";

//imagenes
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')


export function MisCertificadosPage() {
    const [isVisible, setIsVisible] = useState(false);
    const containerWidth = Dimensions.get('window').width;
    const containerheight = Dimensions.get('window').height * 0.52
    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded" />
                <Image source={barra2} className="w-full rounded mt-48" style={{ marginTop: containerheight }} />
            </View>
            <Text className="text-center text-2xl font-bold mt-20 mx-3 text-blue-500">Mis Certificados</Text>


            <ScrollView className="min-h-screen">
                <BuscadorComponent />
                <View className="flex-row flex-wrap gap-1 justify-center mt-2">
                    <TouchableHighlight
                        underlayColor={'#F0C491'}
                        onPress={() => setIsVisible(!isVisible)}
                        className="bg-white shadow-lg rounded-lg p-1 border-orange-500 border-2" style={{ width: containerWidth * 0.48 }}>
                        <View className=" items-center">
                            <Text className="text-base  mt-2 text-blue-700">Titulo de Factura</Text>
                            <View className="my-1 justify-center">
                                <Text className="text-slate-600 text-xs">Fecha: 02-01-2001</Text>
                            </View>
                            <Text className="text-gray-600 mt-1 text-center">
                                {'Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.'.slice(0, 100)}...
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'#F0C491'}
                        onPress={() => setIsVisible(!isVisible)}
                        className="bg-white shadow-lg rounded-lg p-1 border-blue-500 border-2" style={{ width: containerWidth * 0.48 }}>
                        <View className=" items-center">
                            <Text className="text-base  mt-2 text-blue-700">Titulo de Factura</Text>
                            <View className="my-1 justify-center">
                                <Text className="text-slate-600 text-xs">fecha: 02-01-2001 - 02:01</Text>
                            </View>
                            <Text className="text-gray-600 mt-1 text-center">
                                {'Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.'.slice(0, 100)}...
                            </Text>
                        </View>
                    </TouchableHighlight>

                </View>

            </ScrollView>
            <HeaderComponent url={'/estudiante/perfil'} />
            {/* Modal */}
            <View className={`${isVisible ? '' : 'hidden'} absolute h-96 bg-white border-2 border-orange-500 rounded-lg top-28`} style={{ marginLeft: containerWidth * 0.03 }}>
                <View className="flex-row justify-between items-center mx-4">
                    <View className="flex-row items-center">
                        <Text className="text-center text-2xl text-orange-700 my-3">Factura</Text>
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
                    <View className="mx-4">
                        <Text className="text-base text-center text-orange-600 mt-5">Titulo de la notificacion dff sdf dsfs df dsfsd fsdf</Text>
                        <Text className="mt-3">Fecha: 01-02-2001</Text>
                        <Text>Calificacion: <Text className="text-green-500">80/100</Text></Text>
                        <Text className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, quaerat veniam! Rem officiis cum sunt corrupti magni assumenda, non qui inventore culpa ad soluta itaque odio a autem deserunt aliquid.</Text>
                    </View>
                </ScrollView>
            </View>
            {/* End-Modal */}
        </View>
    );
}