import { useState } from "react";
import { Link } from "expo-router"
import { View, Image, Text, TextInput, ScrollView, TouchableHighlight } from "react-native";
import * as DocumentPicker from "expo-document-picker"
import Checkbox from 'expo-checkbox';
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const principalImg = require('../../assets/registerEstudiante.png')
const icono_atras = require('../../assets/IconoAtras.png')
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')
const logo = require('../../assets/Logoprincipal.png')
const load_img = require('../../assets/load.png')
const usuario = require('../../assets/user.png')
//loadImg

export function RegisterStudentPage() {
    const [selectedImageUri, setSelectedImageUri] = useState(null);
    const ImgLoad = async () => {
        try {
            const docRes = await DocumentPicker.getDocumentAsync({
                type: "image/*",
            });
            setSelectedImageUri(docRes.assets[0].uri);
            
            console.log('dddd',selectedImageUri)
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
                <View className="flex-1 relative">
                    <Image source={principalImg} className="w-screen rounded" />
                    <View className="flex-1 absolute ml-48 top-28 justify-center items-center">
                        <Text className="text-2xl w-40 text-center text-white mb-3">Soy</Text>
                        <Text className="text-lg bg-white border-orange-500 border-2 w-48 py-2 text-center mb-3 rounded-xl">
                            Estudiante
                        </Text>
                        <Link href={'/register-teacher'} className="text-lg bg-blue-600 border-white border-2 w-40 py-2 text-center text-slate-50 mb-3 rounded-xl">
                            Docente o coach
                        </Link>
                    </View>
                </View>
                <View className="items-center">
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


                    <Text className="text-2xl my-2 text-center w-80">¡Estás a un paso de unirte a nuestra comunidad!</Text>
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
                    <View className="flex-row mt-4 px-8 items-center">
                        <Checkbox />
                        <Link href={'/'} className="ml-4 text-blue-600">
                            He leído y acepto las Políticas de Privacidad y los Términos y Condiciones de uso de los estudiantes de ProfeGo
                        </Link>
                    </View>
                    <Link href={'/'} className="py-3 mt-10 mb-48 w-72 rounded-2xl justify-center items-center bg-blue-600 text-center">
                        <Text className="text-white text-2xl p-10">
                            Registrarse
                        </Text>
                    </Link>

                    <View className="justify-center items-center mb-10">
                        <Text className=" text-green-700">¿Ya tienes una cuenta? <Link href={'/login-student'} className="text-orange-500">
                            Iniciar sesión
                        </Link> </Text>
                    </View>
                </View>

            </ScrollView>


            <View className="w-full flex-row justify-between items-center px-3 absolute mt-5">
                <Link href={'/login-student'}>
                    <View className="bg-orange-500 rounded-full p-3">
                        <Image source={icono_atras} />
                    </View>
                </Link>
                <Text className="text-white text-2xl">Registro</Text>
                <Image source={logo} className="mr-3" style={{ width: 80, height: 60 }} />
            </View>

        </View>


    );
}
