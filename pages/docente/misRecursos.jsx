import { Link } from "expo-router"

import { View, Image, Text, ScrollView } from "react-native";
import HeaderComponent from "../components/header";
import BuscadorComponent from "../components/buscador";

//imagenes
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')
const casa = require('../../assets/casa.png')


export function MisRecursosPage() {

    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded mb-20" />
                <Image source={barra2} className="w-full rounded mt-48" />
            </View>
            <View className="mt-14">
                <BuscadorComponent  />
            </View>

            <ScrollView className="min-h-screen">
                <View className=" mt-2">
                    <View className="items-center mb-3">
                        <Link href={'/global/cursos'} children>
                            <View className="bg-teal-900 w-80 p-4 rounded-xl mt-2 pr-0">
                                <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                                <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                                <View className="flex-row items-center">
                                    <Image source={casa} />
                                    <Text className="ml-3 text-slate-300">Presencial</Text>
                                </View>
                            </View>
                        </Link>

                    </View>


                    <View className="items-center mb-3">
                        <Link href={'/global/cursos'} children>
                            <View className="bg-teal-900 w-80 p-4 rounded-xl mt-2 pr-0">
                                <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                                <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                                <View className="flex-row items-center">
                                    <Image source={casa} />
                                    <Text className="ml-3 text-slate-300">Presencial</Text>
                                </View>
                            </View>
                        </Link>
                    </View>

                    <View className="items-center mb-3">
                        <Link href={'/global/cursos'} children>
                            <View className="bg-teal-900 w-80 p-4 rounded-xl mt-2 pr-0">
                                <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                                <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                                <View className="flex-row items-center">
                                    <Image source={casa} />
                                    <Text className="ml-3 text-slate-300">Presencial</Text>
                                </View>
                            </View>
                        </Link>
                    </View>

                    <View className="items-center mb-3">
                        <Link href={'/global/cursos'} children>
                            <View className="bg-teal-900 w-80 p-4 rounded-xl mt-2 pr-0">
                                <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                                <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                                <View className="flex-row items-center">
                                    <Image source={casa} />
                                    <Text className="ml-3 text-slate-300">Presencial</Text>
                                </View>
                            </View>
                        </Link>
                    </View>

                    <View className="items-center mb-3">
                        <Link href={'/global/cursos'} children>
                            <View className="bg-teal-900 w-80 p-4 rounded-xl mt-2 pr-0">
                                <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                                <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                                <View className="flex-row items-center">
                                    <Image source={casa} />
                                    <Text className="ml-3 text-slate-300">Presencial</Text>
                                </View>
                            </View>
                        </Link>
                    </View>

                    <View className="items-center mb-3">
                        <Link href={'/global/cursos'} children>
                            <View className="bg-teal-900 w-80 p-4 rounded-xl mt-2 pr-0">
                                <Text className="text-white text-base">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                                <Text className="text-slate-300 text-xs my-2">Por Pedro González</Text>
                                <View className="flex-row items-center">
                                    <Image source={casa} />
                                    <Text className="ml-3 text-slate-300">Presencial</Text>
                                </View>
                            </View>
                        </Link>
                    </View>

                    <View className="items-center mb-3">
                        <Link href={'/global/cursos'} children>
                            <View className="bg-teal-900 w-80 p-4 rounded-xl mt-2 pr-0">
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
            <HeaderComponent nombre={'Mis Recursos'} />

        </View>


    );
}