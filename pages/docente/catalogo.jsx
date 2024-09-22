import { Link } from "expo-router"
import { View, Image, Text, ScrollView } from "react-native";
import { Video } from 'expo-av';

//imagenes
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')
const mundo = require('../../assets/mundo.png')
const casa = require('../../assets/casa.png')
const impartir = require('../../assets/impartir.png')
const logo = require('../../assets/Logoprincipal.png')
const x_icon = require('../../assets/x.png')

export function CatalogoPage() {
    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded mb-20" />
                <Image source={barra2} className="w-full rounded mt-96" />
            </View>
            <ScrollView >
                <Text className="text-center text-2xl mx-5 mt-32">¡Elige tu mejor modalidad, en línea o a domicilio!</Text>
                <View className="flex-row justify-center mt-3">
                    <Image source={mundo} className="mr-5" />
                    <Image source={casa} />
                </View>
                <Text className="text-center text-2xl mt-8 text-orange-500">Catálogo de servicios existentes</Text>
                <Text className="mt-1 mx-7 text-center">¿Te gustaría impartir alguno de los servicios creados por el equipo de ProfeGo? Explora y selecciona los mejores programas para ti o crea los tuyos propios.</Text>
                <View className="mb-36 mt-2">
                    <View className="items-center mt-10">
                        <Video
                            source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // URL del video
                            style={{
                                width: '90%',
                                height: 200,
                            }}
                            useNativeControls // Muestra controles nativos del video
                            resizeMode="contain" // Ajusta el tamaño del video dentro del contenedor
                            isLooping // Hace que el video se reproduzca en bucle
                        />
                        <View className="bg-teal-900 w-80 p-4 rounded-xl mt-2 pr-0">
                            <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                            <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                            <View className="flex-row items-center">
                                <Image source={casa} />
                                <Text className="ml-3 text-slate-300">Presencial</Text>
                            </View>
                        </View>
                        <View className="items-center">
                            <Link href={'/docente/catalogo'} className="py-4 px-4 mt-1 w-64 rounded-2xl justify-center items-center bg-orange-600 text-center">
                                <View className="flex-row">
                                    <Text className="text-white text-2xl pr-4">Impartir</Text>
                                    <Image source={impartir} />
                                </View>

                            </Link>
                        </View>
                    </View>


                    <View className="items-center mt-12">
                        <Video
                            source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // URL del video
                            style={{
                                width: '90%',
                                height: 200,
                            }}
                            useNativeControls // Muestra controles nativos del video
                            resizeMode="contain" // Ajusta el tamaño del video dentro del contenedor
                            isLooping // Hace que el video se reproduzca en bucle
                        />
                        <View className="bg-teal-900 w-80 p-4 rounded-xl mt-2 pr-0">
                            <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                            <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                            <View className="flex-row items-center">
                                <Image source={casa} />
                                <Text className="ml-3 text-slate-300">Presencial</Text>
                            </View>
                        </View>
                        <View className="items-center">
                            <Link href={'/docente/catalogo'} className="py-4 px-4 mt-1 w-64 rounded-2xl justify-center items-center bg-orange-600 text-center">
                                <View className="flex-row">
                                    <Text className="text-white text-2xl pr-4">Impartir</Text>
                                    <Image source={impartir} />
                                </View>

                            </Link>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <View className="w-full flex-row justify-between items-center px-3 absolute mt-5">
                <Image source={logo} style={{ width: 80, height: 60 }} />
                <Text className="text-white text-2xl">Catalogo</Text>
                <Link href={'/docente/inicio'}>
                    <View className="">
                        <Image source={x_icon} />
                    </View>
                </Link>
            </View>

        </View>


    );
}