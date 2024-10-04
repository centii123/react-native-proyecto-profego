import { useState } from "react";
import { Link } from "expo-router"
import { View, Image, Text, ScrollView, Dimensions, TouchableHighlight } from "react-native";
import HeaderComponent from "../components/header";
import BuscadorComponent from "../components/buscador";

//imagenes
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')


export function MisTareasPage() {
    const containerWidth = Dimensions.get('window').width * 0.48;
    const containerheight = Dimensions.get('window').height * 0.52
    const [tareasEntregadas, setTareasEntregadas] = useState(false);
    const [porHacer, setPorHacer] = useState(true);
    return (
        <View className="flex-1">
            <View className="flex-1">
                <Image source={barra1} className="w-full rounded" />
                <Image source={barra2} className="w-full rounded" style={{marginTop:containerheight}}/>
            </View>
            <Text className="text-center text-2xl font-bold mt-20 mx-3 text-blue-500">Mis Tareas</Text>
            <View className="flex-row justify-center my-2">
                <TouchableHighlight
                    onPress={() => {
                        setPorHacer(true)
                        setTareasEntregadas(false)
                    }}
                    underlayColor={'#F0C491'}
                    className={`${porHacer == true ? "bg-orange-500" : "bg-white"} w-40 py-1 rounded-tl-md rounded-bl-md border-2 border-orange-500`}
                >
                    <Text className={`${porHacer == true ? "text-white" : ""} text-center text-base`}>Por Hacer</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        setPorHacer(false)
                        setTareasEntregadas(true)
                    }}
                    underlayColor={'#F0C491'}
                    className={`${tareasEntregadas == true ? "bg-orange-500" : "bg-white"} w-40 py-1 rounded-tr-md rounded-br-md border-2 border-orange-500 border-l-0`}
                >
                    <Text className={`${tareasEntregadas == true ? "text-white" : ""} text-center text-base`}>hechas</Text>
                </TouchableHighlight>
            </View>


            <ScrollView className={`${porHacer == true ? '' : 'hidden'} min-h-screen`}>
                <BuscadorComponent />
                <View className="flex-row flex-wrap gap-1 justify-center mt-2">
                    <Link href={'/'} children>
                        <View className="bg-white shadow-lg rounded-lg p-1 border-orange-500 border-2" style={{ width: containerWidth }}>
                            <View className=" items-center">
                                <Text className="text-base  mt-2 text-blue-700">Clase de Inglés</Text>
                                <View className="my-1 justify-center">
                                    <Text className="text-slate-600 text-xs">Creacion: 02-01-2001 - 02:01</Text>
                                    <Text className="text-slate-600 text-xs">Entrega: 02-01-2001 - 02:01</Text>
                                </View>
                                <Text className="text-gray-600 mt-1 text-center">
                                    {'Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.'.slice(0, 100)}...
                                </Text>
                            </View>
                        </View>
                    </Link>
                </View>

            </ScrollView>

            <ScrollView className={`${tareasEntregadas == true ? '' : 'hidden'} min-h-screen`}>
                <BuscadorComponent />
                <View className="flex-row flex-wrap gap-1 justify-center mt-2">
                    <Link children href={'/'}>
                        <View className="bg-white shadow-lg rounded-lg p-1 border-blue-500 border-2" style={{ width: containerWidth }}>

                            <View className=" items-center">
                                <Text className="text-base  mt-2 text-blue-700">Clase de Inglés</Text>
                                <View className="my-1 justify-center">
                                    <Text className="text-slate-600 text-xs">Creacion: 02-01-2001 - 02:01</Text>
                                    <Text className="text-slate-600 text-xs">Entrega: 02-01-2001 - 02:01</Text>
                                </View>
                                <Text className="text-gray-600 mt-1 text-center">
                                    {'Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.'.slice(0, 100)}...
                                </Text>
                            </View>
                        </View>
                    </Link>

                </View>

            </ScrollView>
            <HeaderComponent url={'/estudiante/perfil'} />

        </View>


    );
}