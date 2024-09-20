import { Link } from "expo-router"
import { View, Image, ScrollView, Text } from "react-native";
import { Video } from 'expo-av';
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const barra1 = require('../../../assets/fondoPantalla.png')
const barra2 = require('../../../assets/barra2.png')
const mundo = require('../../../assets/mundo.png')
const casa = require('../../../assets/casa.png')
const iconoVerMas = require('../../../assets/iconoVerMas.png')

export function ServiciosDocentePage() {
    return (
        <View className="flex-1">
            
            <ScrollView className="min-h-full">
                <View className="items-center pb-5 pt-2 mb-4" style={{ backgroundColor: '#FFEFDA' }}>
                    <Text className="text-lg text-center mx-5">¡Elige tu mejor modalidad, en línea o a domicilio!</Text>
                    <View className="flex-row justify-center mt-3">
                        <Image source={mundo} className="mr-5" />
                        <Image source={casa} />
                    </View>
                </View>
                <View className="flex-row justify-between items-center mx-4 mb-3">
                    <Text className="text-2xl text-orange-500">Mi actividad reciente</Text>
                    <Link href={'/'}>
                        <Text className="w-20 text-blue-500 text-lg">Ver más</Text>
                        <View style={{width:10}}></View>
                        <Image source={iconoVerMas}/>
                    </Link>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4">
                    <View style={{ width: 300 }} className="mr-8">
                        <View style={{ backgroundColor: '#FFEFDA' }} className="items-center rounded-2xl">
                            <Video
                                source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // URL del video
                                style={{
                                    width: '90%',
                                    height: 180
                                }}
                                useNativeControls // Muestra controles nativos del video
                                resizeMode="contain" // Ajusta el tamaño del video dentro del contenedor
                                isLooping // Hace que el video se reproduzca en bucle
                            />
                        </View>

                        <Link href={'/'} className="bg-teal-900  p-3 rounded-xl mt-2">
                            <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                            <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                            <View className="flex-row items-center">
                                <Image source={casa} />
                                <Text className="ml-3 text-slate-300">Presencial</Text>
                            </View>
                        </Link>
                    </View>

                    <View style={{ width: 300 }} className="mr-8">
                        <View style={{ backgroundColor: '#FFEFDA' }} className="items-center rounded-2xl">
                            <Video
                                source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // URL del video
                                style={{
                                    width: '90%',
                                    height: 180
                                }}
                                useNativeControls // Muestra controles nativos del video
                                resizeMode="contain" // Ajusta el tamaño del video dentro del contenedor
                                isLooping // Hace que el video se reproduzca en bucle
                            />
                        </View>

                        <Link href={'/'} className="bg-teal-900  p-3 rounded-xl mt-2">
                            <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                            <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                            <View className="flex-row items-center">
                                <Image source={casa} />
                                <Text className="ml-3 text-slate-300">Presencial</Text>
                            </View>
                        </Link>
                    </View>

                    <View style={{ width: 300 }} className="mr-8">
                        <View style={{ backgroundColor: '#FFEFDA' }} className="items-center rounded-2xl">
                            <Video
                                source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // URL del video
                                style={{
                                    width: '90%',
                                    height: 180
                                }}
                                useNativeControls // Muestra controles nativos del video
                                resizeMode="contain" // Ajusta el tamaño del video dentro del contenedor
                                isLooping // Hace que el video se reproduzca en bucle
                            />
                        </View>

                        <Link href={'/'} className="bg-teal-900  p-3 rounded-xl mt-2">
                            <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                            <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                            <View className="flex-row items-center">
                                <Image source={casa} />
                                <Text className="ml-3 text-slate-300">Presencial</Text>
                            </View>
                        </Link>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    );
}