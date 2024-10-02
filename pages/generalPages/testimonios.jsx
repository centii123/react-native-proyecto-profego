import { useState } from "react";
import { View, Image, Text, ScrollView, TouchableHighlight, TextInput } from "react-native";
import RatingStars from "./components/estrellas";
import { Picker } from '@react-native-picker/picker';
import StarInput from "./components/input-estrellas";
import HeaderComponent from "../components/header";
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const logoOtro = require('../../assets/logoOtro.png')

export function TestimoniosPage() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };
    return (
        <View className="flex-1">

            <ScrollView className="min-h-screen">
                <Text className="text-center text-orange-400 text-lg mt-20 font-bold">Nuestros testimonios</Text>
                <Text className="text-center">¿Qué dice nuestra comunidad de nuestros servicios?</Text>

                <View className="bg-white shadow-lg rounded-lg p-4 m-4 flex-row justify-between items-center">
                    <Image source={logoOtro} className="rounded-lg  " />
                    <View className="w-52">
                        <Text className="text-lg font-bold mt-2 text-orange-400">ProfeGo</Text>
                        <View className="flex-row">
                            <Text className="text-green-700 mr-2">Opiniones 15.230 </Text>
                            <Text className="text-green-700">◉ Excelente</Text>
                        </View>
                        <RatingStars rating={5} />
                    </View>

                </View>
                <Text className="text-lg text-orange-400 text-center mb-5 font-bold">Opiniones destacadas</Text>

                <View className="flex-row flex-wrap gap-1 justify-center mb-5">
                    <View className="bg-white shadow-lg rounded-lg p-2 w-44 border-blue-500 border-2" >
                        <View className="flex-row items-center">
                            <Image source={logoOtro} className="rounded-full ml-3" style={{ width: 50, height: 50 }} />
                            <Text className="text-lg mt-2 text-blue-700 ml-2 w-24 text-center">Leonel Sánchez</Text>
                        </View>

                        <View className=" items-center">
                            <Text className="text-base  mt-2 text-blue-700">Clase de Inglés</Text>
                            <RatingStars rating={5} />
                            <Text className="text-gray-600 mt-1 w-44 text-center">
                                Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.
                            </Text>
                        </View>
                    </View>
                    <View className="bg-white shadow-lg rounded-lg p-2 w-44 border-orange-500 border-2" >
                        <View className="flex-row items-center">
                            <Image source={logoOtro} className="rounded-full ml-3" style={{ width: 50, height: 50 }} />
                            <Text className="text-lg mt-2 text-blue-700 ml-2 w-24 text-center">Leonel Sánchez</Text>
                        </View>

                        <View className=" items-center">
                            <Text className="text-base mt-2 text-blue-700">Clase de Inglés</Text>
                            <RatingStars rating={5} />
                            <Text className="text-gray-600 mt-1 w-44 text-center">
                                Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.
                            </Text>
                        </View>
                    </View>
                    <View className="bg-white shadow-lg rounded-lg p-2 w-44 border-blue-500 border-2" >
                        <View className="flex-row items-center">
                            <Image source={logoOtro} className="rounded-full ml-3" style={{ width: 50, height: 50 }} />
                            <Text className="text-lg  mt-2 text-blue-700 ml-2 w-24 text-center">Leonel Sánchez</Text>
                        </View>

                        <View className=" items-center">
                            <Text className="text-base  mt-2 text-blue-700">Clase de Inglés</Text>
                            <RatingStars rating={5} />
                            <Text className="text-gray-600 mt-1 w-44 text-center">
                                Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.
                            </Text>
                        </View>
                    </View>
                    <View className="bg-white shadow-lg rounded-lg p-2 w-44 border-orange-500 border-2" >
                        <View className="flex-row items-center">
                            <Image source={logoOtro} className="rounded-full ml-3" style={{ width: 50, height: 50 }} />
                            <Text className="text-lg mt-2 text-blue-700 ml-2 w-24 text-center">Leonel Sánchez</Text>
                        </View>

                        <View className=" items-center">
                            <Text className="text-base mt-2 text-blue-700">Clase de Inglés</Text>
                            <RatingStars rating={5} />
                            <Text className="text-gray-600 mt-1 w-44 text-center">
                                Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="bg-white shadow-lg rounded-lg py-2 flex-row justify-center items-center mb-5">
                    <Text className="text-base text-green-800">Ordenar por:</Text>
                    <View className="bg-orange-300 rounded-lg ml-3">
                        <Picker
                            selectedValue={selectedValue}
                            style={{
                                width: 190,
                                color: '#18574F'
                            }}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Más recientes" value="Más recientes" />
                            <Picker.Item label="Más relevantes" value="Más relevantes" />
                        </Picker>
                    </View>

                </View>



                <View className="flex-row flex-wrap gap-1 justify-center mb-16">
                    <View className="bg-white shadow-lg rounded-lg p-2 w-44 border-orange-500 border-2" >
                        <View className="flex-row items-center">
                            <Image source={logoOtro} className="rounded-full ml-3" style={{ width: 50, height: 50 }} />
                            <Text className="text-lg mt-2 text-blue-700 ml-2 w-24 text-center">Leonel Sánchez</Text>
                        </View>

                        <View className=" items-center">
                            <Text className="text-base  mt-2 text-blue-700">Clase de Inglés</Text>
                            <RatingStars rating={5} />
                            <Text className="text-gray-600 mt-1 w-44 text-center">
                                Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.
                            </Text>
                        </View>
                    </View>
                    <View className="bg-white shadow-lg rounded-lg p-2 w-44 border-blue-500 border-2" >
                        <View className="flex-row items-center">
                            <Image source={logoOtro} className="rounded-full ml-3" style={{ width: 50, height: 50 }} />
                            <Text className="text-lg mt-2 text-blue-700 ml-2 w-24 text-center">Leonel Sánchez</Text>
                        </View>

                        <View className=" items-center">
                            <Text className="text-base mt-2 text-blue-700">Clase de Inglés</Text>
                            <RatingStars rating={5} />
                            <Text className="text-gray-600 mt-1 w-44 text-center">
                                Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.
                            </Text>
                        </View>
                    </View>
                    <View className="bg-white shadow-lg rounded-lg p-2 w-44 border-orange-500 border-2" >
                        <View className="flex-row items-center">
                            <Image source={logoOtro} className="rounded-full ml-3" style={{ width: 50, height: 50 }} />
                            <Text className="text-lg  mt-2 text-blue-700 ml-2 w-24 text-center">Leonel Sánchez</Text>
                        </View>

                        <View className=" items-center">
                            <Text className="text-base  mt-2 text-blue-700">Clase de Inglés</Text>
                            <RatingStars rating={5} />
                            <Text className="text-gray-600 mt-1 w-44 text-center">
                                Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.
                            </Text>
                        </View>
                    </View>
                    <View className="bg-white shadow-lg rounded-lg p-2 w-44 border-blue-500 border-2" >
                        <View className="flex-row items-center">
                            <Image source={logoOtro} className="rounded-full ml-3" style={{ width: 50, height: 50 }} />
                            <Text className="text-lg mt-2 text-blue-700 ml-2 w-24 text-center">Leonel Sánchez</Text>
                        </View>

                        <View className=" items-center">
                            <Text className="text-base mt-2 text-blue-700">Clase de Inglés</Text>
                            <RatingStars rating={5} />
                            <Text className="text-gray-600 mt-1 w-44 text-center">
                                Plataforma 100% recomendable. Encontré una profesora particular de inglés que me ayudó a mejorar mi conversación.
                            </Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <HeaderComponent nombre={'Testimonios'} />
            

            <TouchableHighlight
            underlayColor={'#F29224'}
                onPress={() => setIsVisible(!isVisible)}
                className="absolute w-14 h-14 bg-orange-600 justify-center items-center rounded-full border-2 top-3/4 mt-16  border-orange-600" style={{ left: '80%' }}>
                <Text className="text-3xl font-bold text-white">+</Text>
            </TouchableHighlight>

            {/* Modal */}
            <View className={`${isVisible ? '' : 'hidden'} absolute h-96 bg-white border-2 border-orange-500 rounded-lg top-20 left-5 w-80`}>
                <View className="flex-row justify-between items-center mx-4">
                    <Text className="text-center text-2xl text-orange-700 my-3">Comentar</Text>
                    <TouchableHighlight
                    underlayColor={'#F29224'}
                    onPress={() => setIsVisible(!isVisible)}
                        className=" rounded-lg h-8 w-8 justify-center items-center"
                    >
                        <Text className="text-2xl text-black">x</Text>
                    </TouchableHighlight>

                </View>
                <View className="h-1 bg-orange-500"></View>
                <ScrollView>
                    <Text className="text-base text-green-900 ml-8 mt-5">Selecciona una puntuación:</Text>
                    <StarInput onRatingChange={handleRatingChange} />
                    <View className="items-center">
                        <View className="mt-2">
                            <Text className="text-base text-start mb-2 text-green-900">Titulo:</Text>
                            <View className="w-64 py-2 px-6 border-orange-500 border-2 rounded-2xl">
                                <TextInput />
                            </View>
                        </View>
                        <View className="mt-2">
                            <Text className="text-base text-start mb-2 text-green-900">Descripción:</Text>
                            <View className="w-64 py-2 px-6 border-orange-500 border-2 rounded-2xl">
                                <TextInput
                                    multiline
                                    numberOfLines={4}
                                    placeholder="Type here..."
                                    textAlignVertical="top"
                                />
                            </View>
                        </View>
                    </View>
                    <View className="flex-row justify-around mt-4 mb-36">
                        <TouchableHighlight
                        onPress={() => setIsVisible(!isVisible)}
                            className="bg-red-600 justify-center items-center rounded-lg w-32"
                        >
                            <Text className="text-2xl text-white">Cancelar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            className="bg-green-600 justify-center items-center rounded-lg w-32 h-12"
                        >
                            <Text className="text-2xl text-white">Comentar</Text>
                        </TouchableHighlight>
                    </View>
                    {/* <Text className="text-lg mt-4">Tu puntuación: {rating}.0</Text> */}
                </ScrollView>
            </View>
            {/* End-Modal */}
        </View>
    );
}