import { useState } from "react";
import { Link } from "expo-router"
import { View, Image, Text, TextInput, ScrollView, TouchableHighlight } from "react-native";
import * as DocumentPicker from "expo-document-picker"
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const documentosadd = require('../../assets/documentosadd.png')
const icono_atras = require('../../assets/IconoAtras.png')
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')
const logo = require('../../assets/Logoprincipal.png')
const load_img = require('../../assets/load.png')
const usuario = require('../../assets/user.png')
const x_icon = require('../../assets/x.png')
//loadImg

export function RegisterDatosTeacherPage() {
    const [selectedImageUri, setSelectedImageUri] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    //documentos
    const [docOne, setDocOne] = useState(null);
    const [docTwo, setDocTwo] = useState(null);
    const [docTree, setDocTree] = useState(null);

    const ImgLoad = async () => {
        try {
            const docRes = await DocumentPicker.getDocumentAsync({
                type: "image/*",
            });
            setSelectedImageUri(docRes.assets[0].uri);
        } catch (error) {
            console.log("Error while selecting file: ", error);
        }
    };

    const PdfLoad = async (num) => {
        try {
            const docRes = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
            });
            if (num == 1) {
                setDocOne(docRes.assets[0]['name'])
            } else if (num == 2) {
                setDocTwo(docRes.assets[0]['name'])
            } else if (num == 3) {
                setDocTree(docRes.assets[0]['name'])
            } else {
                console.log('incorrecto')
            }
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
                <View className="flex-1 mt-24 mx-5">
                    <Text className="text-2xl">Postulación como docente o coach</Text>
                    <Text style={{ width: 300 }}>Completa y envía el siguiente formulario para la aprobación de tu postulación.</Text>

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

                        <TouchableHighlight underlayColor={'#F29224'} onPress={ImgLoad} className="absolute flex justify-center items-center w-36 h-36">
                            <Image source={load_img} className="w-16 h-16" resizeMode="contain" />
                        </TouchableHighlight>
                    </View>
                    <View className="mt-3">
                        <Text className="text-lg text-start mb-2 text-green-900">Nombre completos</Text>
                        <View className="w-80 py-2 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>
                    <View className="mt-3 flex-row">
                        <View className="mr-6">
                            <Text className="text-lg text-start mb-2 text-green-900">Tipo de usuario</Text>
                            <View className="w-48  border-orange-500 border-4 rounded-2xl">
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{
                                        width: 185,
                                    }}
                                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Jasva" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                    <Picker.Item label="Python" value="python" />
                                    <Picker.Item label="C++" value="cpp" />
                                </Picker>
                            </View>
                        </View>
                        <View>
                            <Text className="text-lg text-start mb-2 text-green-900">Edad</Text>
                            <View className="w-24 py-3 px-3 border-orange-500 border-4 rounded-2xl">
                                <TextInput />
                            </View>
                        </View>
                    </View>
                    <View className="mt-3">

                    </View>

                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Nombre del título o especialidad</Text>
                        <View className="w-80 py-2 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>
                    <View className="flex-row mt-1 mb-2  items-center w-80">
                        <Checkbox />
                        <Link href={'/'} className="ml-4 text-blue-600">
                            Estoy capacitado para trabajar con estudiantes que tienen Necesidades Educativas Especiales
                        </Link>
                    </View>
                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Documentación requerida</Text>
                        <View className="flex-row w-80 justify-between items-center">
                            <Text className="w-20 text-center">Título profesional y/o certificados de aval de enseñanza</Text>
                            <Text className="w-20 text-center">Hoja de vida actualizada</Text>
                            <Text className="w-20 text-center">Certificado de Antecedentes Penales</Text>
                        </View>
                        <View className="flex-row w-80 justify-between mt-2">
                            <View className="relative w-20 h-28">
                                <View className="w-20 h-28 border-orange-500 border-4 rounded-2xl items-center justify-center">
                                    <Image source={documentosadd} className="w-12 h-20" resizeMode="contain" />
                                </View>

                                <TouchableHighlight underlayColor={'#F29224'} onPress={() => PdfLoad(1)} className="absolute flex justify-center items-center w-20 h-28">
                                    <Image source={load_img} className="w-10 h-16" resizeMode="contain" />
                                </TouchableHighlight>
                            </View>
                            <View className="relative w-20 h-28">


                                <View className="w-20 h-28 border-orange-500 border-4 rounded-2xl items-center justify-center">
                                    <Image source={documentosadd} className="w-12 h-20" resizeMode="contain" />
                                </View>

                                <TouchableHighlight underlayColor={'#F29224'} onPress={() => PdfLoad(2)} className="absolute flex justify-center items-center w-20 h-28">
                                    <Image source={load_img} className="w-10 h-16" resizeMode="contain" />
                                </TouchableHighlight>
                            </View>
                            <View className="relative w-20 h-28">
                                <View className="w-20 h-28 border-orange-500 border-4 rounded-2xl items-center justify-center">
                                    <Image source={documentosadd} className="w-12 h-20" resizeMode="contain" />
                                </View>

                                <TouchableHighlight underlayColor={'#F29224'} onPress={() => PdfLoad(3)} className="absolute flex justify-center items-center w-20 h-28">
                                    <Image source={load_img} className="w-10 h-16" resizeMode="contain" />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View className="flex-row w-80 justify-between items-center">

                            <Text className="w-20 text-center text-green-700" style={{ fontSize: 10 }}>
                                {docOne ?
                                    `${docOne.slice(0, 30)}...`
                                    : (
                                        ''
                                    )}
                            </Text>
                            <Text className="w-20 text-center text-green-700" style={{ fontSize: 10 }}>
                                {docTwo ?
                                    `${docTwo.slice(0, 30)}...`
                                    : (
                                        ''
                                    )}

                            </Text>
                            <Text className="w-20 text-center text-green-700" style={{ fontSize: 10 }}>
                                {docTree ?
                                    `${docTree.slice(0, 30)}...`
                                    : (
                                        ''
                                    )}
                            </Text>
                        </View>
                        <Text className=" text-blue-600 text-center mt-1">Sube tus archivos en formato .pdf  (Recomendado)</Text>
                    </View>
                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Áreas/ asignaturas a enseñar</Text>
                        <View className="w-80 py-2 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>
                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Rango de edad de enseñanza</Text>
                        <View className="w-80 py-2 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>

                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Descripción</Text>
                        <View className="w-80 py-2 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput
                                multiline
                                numberOfLines={4}
                                placeholder="Type here..."
                                textAlignVertical="top"
                            />
                        </View>
                    </View>
                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Correo electrónico</Text>
                        <View className="w-80 py-2 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>
                    <View className="mt-2 flex-row">
                        <View className="mr-6">
                            <Text className="text-lg text-start mb-2 text-green-900">Cédula</Text>
                            <View className="w-36 py-2 px-2 border-orange-500 border-4 rounded-2xl">
                                <TextInput />
                            </View>
                        </View>
                        <View>
                            <Text className="text-lg text-start mb-2 text-green-900">Celular</Text>
                            <View className="w-36 py-2 px-2 border-orange-500 border-4 rounded-2xl">
                                <TextInput />
                            </View>
                        </View>
                    </View>
                    <View className="mt-2">
                        <Text className="text-lg text-start mb-2 text-green-900">Contraseña</Text>
                        <View className="w-80 py-2 px-6 border-orange-500 border-4 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>
                    <Link href={'/docente/inicio'} className="py-3 mt-10 mb-48 w-72 rounded-2xl justify-center items-center bg-blue-600 text-center">
                        <Text className="text-white text-2xl p-10">
                            Guardar y enviar
                        </Text>
                    </Link>
                </View>
            </ScrollView>


            <View className="w-full flex-row justify-between items-center px-3 absolute mt-5">
                <Link href={'/login-student'}>
                    <View className=" p-3">
                        <Image source={icono_atras} />
                    </View>
                </Link>
                <Image source={logo} className="mr-3" style={{ width: 80, height: 60 }} />
                <Link href={'/login-student'}>
                    <View className=" p-3">
                        <Image source={x_icon} />
                    </View>
                </Link>


            </View>

        </View>


    );
}