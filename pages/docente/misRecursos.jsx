import { Link } from "expo-router"

import { View, Image, Text, ScrollView, Dimensions } from "react-native";
import HeaderComponent from "../components/header";
import BuscadorComponent from "../components/buscador";

//imagenes
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')
const casa = require('../../assets/casa.png')


export function MisRecursosPage() {

    const containerWidth = Dimensions.get('window').width * 0.48;
    const containerheight = Dimensions.get('window').height * 0.52
    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded" />
                <Image source={barra2} className="w-full rounded mt-48" style={{marginTop:containerheight}}/>
            </View>
            <Text className="text-center text-2xl font-bold mt-20 mx-3 text-blue-500">Mis Recursos</Text>
            <ScrollView className="min-h-screen">
                <BuscadorComponent />
                <View className="flex-row flex-wrap gap-1 justify-center mt-2">
                    <View className="bg-white shadow-lg rounded-lg p-1 border-orange-500 border-2" style={{ width: containerWidth }}>

                        <View className=" items-center">
                            <Text className="text-base  mt-2 text-blue-700">recurso1</Text>
                            <View className="my-1 justify-center">
                                <Text className="text-slate-600 text-xs">Creacion: 02-01-2001 - 02:01</Text>
                                <Text className="text-slate-600 text-xs">Entrega: 02-01-2001 - 02:01</Text>
                            </View>
                            <Text className="text-gray-600 mt-1 text-center">
                                {'Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.'.slice(0, 100)}...
                            </Text>
                        </View>
                    </View>
                    <View className="bg-white shadow-lg rounded-lg p-1 border-blue-500 border-2" style={{ width: containerWidth }}>

                        <View className=" items-center">
                            <Text className="text-base  mt-2 text-blue-700">Recurso 2</Text>
                            <View className="my-1 justify-center">
                                <Text className="text-slate-600 text-xs">Creacion: 02-01-2001 - 02:01</Text>
                                <Text className="text-slate-600 text-xs">Entrega: 02-01-2001 - 02:01</Text>
                            </View>
                            <Text className="text-gray-600 mt-1 text-center">
                                {'Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.'.slice(0, 100)}...
                            </Text>
                        </View>
                    </View>

                </View>

            </ScrollView>
            <HeaderComponent url={'/docente/perfil'} />

        </View>


    );
}