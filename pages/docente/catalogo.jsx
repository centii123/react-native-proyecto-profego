import { Link } from "expo-router"

import { View, Image, Text, ScrollView, Dimensions } from "react-native";
import { Video } from 'expo-av';
import HeaderComponent from "../components/header";
import BuscadorComponent from "../components/buscador";

//imagenes
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')
const mundo = require('../../assets/mundo.png')
const casa = require('../../assets/casa.png')


export function CatalogoPage() {
    const anchuraPantalla=Dimensions.get('window').width;
    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded mb-20" />
                <Image source={barra2} className="w-full rounded mt-48" />
            </View>
            <View className="mt-14">
                <BuscadorComponent  />
            </View>

            <ScrollView >
                <Text className="text-center text-2xl mx-5 ">¡Elige tu mejor modalidad, en línea o a domicilio!</Text>
                <View className="flex-row justify-center mt-3">
                    <Image source={mundo} className="mr-5" />
                    <Image source={casa} />
                </View>
                <Text className="text-center text-2xl mt-8 text-orange-500">Catálogo de servicios existentes</Text>
                <Text className="mt-1 mx-7 text-center">¿Te gustaría impartir alguno de los servicios creados por el equipo de ProfeGo? Explora y selecciona los mejores programas para ti o crea los tuyos propios.</Text>
                <View className="mb-10 mt-4">
                    <View className="items-center mb-8" >
                        <Video
                            source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // URL del video
                            style={{
                                width: '80%',
                                height: 200,
                            }}
                            useNativeControls // Muestra controles nativos del video
                            resizeMode="contain" // Ajusta el tamaño del video dentro del contenedor
                            isLooping // Hace que el video se reproduzca en bucle
                        />
                        <Link href={'/global/cursos'} children className="mt-2">
                            <View className="bg-teal-900 p-4 rounded-xl" style={{width:anchuraPantalla * 0.90}}>
                                <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                                <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                                <View className="flex-row items-center">
                                    <Image source={casa} />
                                    <Text className="ml-3 text-slate-300">Presencial</Text>
                                </View>
                            </View>
                        </Link>

                    </View>


                    <View className="items-center mb-8" >
                        <Video
                            source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // URL del video
                            style={{
                                width: '80%',
                                height: 200,
                            }}
                            useNativeControls // Muestra controles nativos del video
                            resizeMode="contain" // Ajusta el tamaño del video dentro del contenedor
                            isLooping // Hace que el video se reproduzca en bucle
                        />
                        <Link href={'/global/cursos'} children className="mt-2">
                            <View className="bg-teal-900 p-4 rounded-xl" style={{width:anchuraPantalla * 0.90}}>
                                <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                                <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                                <View className="flex-row items-center">
                                    <Image source={casa} />
                                    <Text className="ml-3 text-slate-300">Presencial</Text>
                                </View>
                            </View>
                        </Link>

                    </View>
                </View>

            </ScrollView>
            <HeaderComponent nombre={'Catalogo'} />

        </View>


    );
}