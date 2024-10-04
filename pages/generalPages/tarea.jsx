import { useState } from "react";
import { View, Text, ScrollView, TouchableHighlight, TextInput, Dimensions } from "react-native";
import * as DocumentPicker from "expo-document-picker"
import HeaderComponent from "../components/header";
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";


export function TareaPage() {
    const [documento, setDocumento] = useState(null);
    const anchuraPantalla=Dimensions.get('window').width;
    const PdfLoad = async (num) => {
        try {
            const docRes = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',

            });
            setDocumento(docRes.assets[0]["name"])


        } catch (error) {
            console.log("Error while selecting file: ", error);
        }
    };
    return (
        <View className="flex-1">
            <ScrollView className="min-h-screen">
                <Text className="mt-20 text-center mx-2 text-orange-600 text-lg font-semibold">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
                <View className="flex-row mx-2 mt-2">
                    <Text className="font-bold">Apertura:</Text><Text> jueves, 1 de agosto de 2024, 00:06</Text>
                </View>
                <View className="flex-row mx-2">
                    <Text className="font-bold">Cierre:</Text><Text> jueves, 1 de agosto de 2024, 00:06</Text>
                </View>
                <Text className="mt-2 mx-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eos tenetur ullam dignissimos qui cupiditate nihil, obcaecati enim nostrum officia quis hic fugiat aspernatur recusandae accusantium quidem, optio eligendi in.</Text>
                <View className="items-center mt-3">
                    <TouchableHighlight onPress={PdfLoad} className="bg-orange-600 w-48 flex items-center rounded-sm py-2">
                        <Text className="text-white">Subir Archivo</Text>
                    </TouchableHighlight>
                    <View className="flex-row items-center">
                        <Text className={`${documento == null ? 'text-green-800' : 'underline'} text-slate-700 mt-2`}>{documento == null ? 'Debe ser un documento pdf' : documento}</Text>
                        {
                            documento != null ?
                                (
                                    <TouchableHighlight className="ml-3" onPress={() => { setDocumento(null) }}>
                                        <Text className="text-xl text-red-700 mt-1 font-bold">x</Text>
                                    </TouchableHighlight>
                                ) : null
                        }
                    </View>
                    <View>
                        {
                            documento != null ?
                                (
                                    <TouchableHighlight className="ml-3 bg-green-800" onPress={() => { setDocumento(null) }}>
                                        <Text className=" text-white p-2 font-bold">Agregar y Enviar</Text>
                                    </TouchableHighlight>
                                ) : null
                        }
                    </View>
                </View>

                <View className="border-2 border-orange-600 flex-row mx-3 mt-3">
                    <View className="border-r-2 border-orange-600" style={{ width: anchuraPantalla * 0.50 }}>
                        <Text className="text-center border-b-2 border-orange-600">Archivo Entregado</Text>
                        <Text className="border-b-2 border-orange-600 text-center">Estado de la Calificacion</Text>
                        <Text className="text-center border-b-2 border-orange-600">Calificacion</Text>
                        <Text className="text-center">Comentarios de la entrega</Text>
                    </View>

                    <View style={{ width: anchuraPantalla * 0.43 }}>
                        <Text className="text-center border-b-2 border-orange-600">{'hola hermano como te ecuentras'.slice(0, 15)}...</Text>
                        <Text className="border-b-2 border-orange-600 text-center bg-green-400">Calificado</Text>
                        <Text className="text-center border-b-2 border-orange-600">100/100</Text>
                        <Text className="text-center text-blue-700 font-semibold">Comentarios (4)</Text>
                    </View>


                    {/* <Text>Estado de Entrega</Text>
                    <View>
                        <Text>Estado de la Calificacion</Text>
                    </View>
                    <View>
                        <Text>Calificacion</Text>
                    </View> */}
                </View>
                <View className="shadow-lg bg-slate-100 border-2 border-slate-100 rounded-lg mt-2 mx-3 p-2 items-center">
                    <View className="mt-3 mb-1">
                        <View className="w-72  border-orange-500 border-4  rounded-md">
                        <TextInput
                                multiline
                                numberOfLines={4}
                                placeholder="Escribe aquí..."
                                textAlignVertical="top"
                            />
                        </View>
                    </View>
                    <TouchableHighlight className="ml-3 w-28 bg-green-800 rounded-md" onPress={() => { setDocumento(null) }}>
                        <Text className=" text-white p-2 font-bold text-center">Comentar</Text>
                    </TouchableHighlight>
                </View>
                <View className="mb-14">
                    <View className="shadow-lg bg-slate-100 border-2 border-slate-100 rounded-lg mt-2 mx-3 p-2">
                        <Text className="text-green-700 text-base mb-2">Enrique Sebastian Mera Yela</Text>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, excepturi recusandae quibusdam iusto sed veritatis quos! Tempora adipisci placeat dicta, beatae dolorum voluptatibus similique. In eum nobis quam delectus quisquam!</Text>
                    </View>
                    <View className="shadow-lg bg-slate-100 border-2 border-slate-100 rounded-lg mt-2 mx-3 p-2">
                        <Text className="text-green-700 text-base mb-2">Fernando Alfredo Borja Jurado</Text>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, excepturi recusandae quibusdam iusto sed veritatis quos! Tempora adipisci placeat dicta, beatae dolorum voluptatibus similique. In eum nobis quam delectus quisquam!</Text>
                    </View>
                    <View className="shadow-lg bg-slate-100 border-2 border-slate-100 rounded-lg mt-2 mx-3 p-2">
                        <Text className="text-green-700 text-base mb-2">Enrique Sebastian Mera Yela</Text>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, excepturi recusandae quibusdam iusto sed veritatis quos! Tempora adipisci placeat dicta, beatae dolorum voluptatibus similique. In eum nobis quam delectus quisquam!</Text>
                    </View>
                </View>



            </ScrollView>
            <HeaderComponent nombre={'Cursos'} />
        </View>
    );
}