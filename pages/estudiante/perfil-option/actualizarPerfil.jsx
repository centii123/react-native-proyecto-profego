
import { useState } from "react";
import { Link } from "expo-router"
import { View, Image, Text, TextInput, ScrollView, TouchableHighlight } from "react-native";
import * as DocumentPicker from "expo-document-picker"
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const barra1 = require('../../../assets/fondoPantalla.png')
const barra2 = require('../../../assets/barra2.png')
const logo = require('../../../assets/Logoprincipal.png')
const x_icon = require('../../../assets/x.png')
const load_img = require('../../../assets/load.png')
const usuario = require('../../../assets/user.png')


export function ActualizarPerfilStudentPage() {

    const [selectedImageUri, setSelectedImageUri] = useState(null);
    const ImgLoad = async () => {
        try {
            const docRes = await DocumentPicker.getDocumentAsync({
                type: "image/*",
            });
            setSelectedImageUri(docRes.assets[0].uri);

            console.log('dddd', selectedImageUri)
            console.log('img', docRes);
        } catch (error) {
            console.log("Error while selecting file: ", error);
        }
    };
    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded mb-20" />
                <Image source={barra2} className="w-full rounded mt-96" />
            </View>
            <ScrollView >
                
                <View className="items-center mb-72 mt-20">
                    <View className="relative mt-9 mb-5 w-36 h-36">
                        {selectedImageUri ? (
                            <Image source={{ uri: selectedImageUri }} style={{ width: 150, height: 150 }} resizeMode="cover" /> // Mostrar la imagen seleccionada
                        ) : (
                            <View className="w-36 h-36 bg-orange-500 rounded-md items-center justify-center">
                                <Image source={usuario} className="w-24 h-24" resizeMode="contain" />
                            </View>

                        )}

                        <TouchableHighlight onPress={ImgLoad} className="absolute flex justify-center items-center w-36 h-36">
                            <Image source={load_img} className="w-16 h-16" resizeMode="contain" />
                        </TouchableHighlight>
                    </View>

                    <View className="mt-3">
                        <Text className="text-lg text-start mb-2 text-green-900">Nombre completo</Text>
                        <View className="w-80 py-3 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>
                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Correo electrónico</Text>
                        <View className="w-80 py-3 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>
                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Usuario</Text>
                        <View className="w-80 py-3 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>
                    <View className="mt-2 flex-row">
                        <View className="mr-6">
                            <Text className="text-lg text-start mb-2 text-green-900">Cédula</Text>
                            <View className="w-36 py-3 px-2 border-orange-500 border-4 rounded-2xl">
                                <TextInput />
                            </View>
                        </View>
                        <View>
                            <Text className="text-lg text-start mb-2 text-green-900">Celular</Text>
                            <View className="w-36 py-3 px-2 border-orange-500 border-4 rounded-2xl">
                                <TextInput />
                            </View>
                        </View>
                    </View>
                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Contraseña</Text>
                        <View className="w-80 py-3 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>
                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Repite la contraseña</Text>
                        <View className="w-80 py-3 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>
                    
                    <Link href={'/'} className="py-3 mt-10 mb-48 w-72 rounded-2xl justify-center items-center bg-blue-600 text-center">
                        <Text className="text-white text-2xl p-10">
                            Actualizar Perfil
                        </Text>
                    </Link>

                </View>

            </ScrollView>
            <View className="w-full flex-row justify-between items-center px-3 absolute mt-5">
                <Image source={logo} style={{ width: 80, height: 60 }} />
                <Text className="text-white text-2xl">Actualizar Perfil</Text>
                <Link href={'/docente/perfil'}>
                    <View className="">
                        <Image source={x_icon} />
                    </View>
                </Link>
            </View>
        </View>
    );
}