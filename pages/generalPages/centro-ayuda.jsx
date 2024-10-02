import { View, Image, Text, ScrollView, TextInput, TouchableHighlight } from "react-native";
import { Picker } from '@react-native-picker/picker';
import HeaderComponent from "../components/header";
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const telefono = require('../../assets/contactanos/iconollamada.png')
const direccion = require('../../assets/contactanos/ubicacion.png')
const email = require('../../assets/contactanos/email.png')
const pregunta1 = require('../../assets/contactanos/pregunta1.png')
const pregunta2 = require('../../assets/contactanos/pregunta2.png')
const pregunta3 = require('../../assets/contactanos/pregunta3.png')
const pregunta4 = require('../../assets/contactanos/pregunta4.png')



export function CentroAyudaPage() {
    // const [selectedValue, setSelectedValue] = useState(null);
    return (
        <View className="flex-1">
            <ScrollView className="min-h-screen">
                <Text className="mt-20 text-orange-600 text-2xl text-center">Contactos</Text>
                <Text className="text-center mx-2 mt-1">Estamos aquí para ayudarte. ¡Escríbenos si tienes preguntas o necesitas asistencia!</Text>
                <View className="flex-row justify-around items-center mt-5">
                    <View className="items-center">
                        <Image source={telefono} resizeMode="contain" style={{ width: 50, height: 50 }} />
                        <View className="mt-2">
                            <Text className="text-green-800 text-center">Teléfonos</Text>
                            <Text className="text-center">0995248259 - 0998125196</Text>
                        </View>
                    </View>
                    <View className="items-center">
                        <Image source={email} resizeMode="contain" style={{ width: 50, height: 50 }} />
                        <View className="mt-2">
                            <Text className="text-green-800 text-center">Correo electrónico</Text>
                            <Text className="text-center">educonecta2@gmail.com</Text>
                        </View>
                    </View>

                </View>
                <View className="items-center mt-4">
                    <Image source={direccion} resizeMode="contain" style={{ width: 50, height: 50 }} />
                    <View className="mt-2">
                        <Text className="text-green-800 text-center">Dirección</Text>
                        <Text className="text-center">Departamento: República del Salvador y Suecia</Text>
                    </View>
                </View>

                <Text className="mt-5 text-orange-600 text-lg mb-2 text-center">Escríbenos</Text>
                <View className="items-center">
                    <View className="mt-2 flex-row">
                        <View className="mr-2">
                            <Text className="text-sm text-start mb-2 text-green-900">Nombre</Text>
                            <View className="w-40 py-2 px-2 border-orange-500 border-2 rounded-2xl">
                                <TextInput />
                            </View>
                        </View>
                        <View>
                            <Text className="text-sm text-start mb-2 text-green-900">Teléfono</Text>
                            <View className="w-40 py-2 px-2 border-orange-500 border-2 rounded-2xl">
                                <TextInput />
                            </View>
                        </View>
                    </View>

                    <View className="mt-2">
                        <Text className="text-sm text-start mb-2 text-green-900">Correo electrónico</Text>
                        <View className="w-80 py-2 px-6 border-orange-500 border-2 rounded-2xl">
                            <TextInput />
                        </View>
                    </View>

                    <View className="mt-2">
                        <Text className="text-sm text-start mb-2 text-green-900">Mensaje</Text>
                        <View className="w-80 py-2 px-6 border-orange-500 border-2 rounded-2xl">
                            <TextInput
                                multiline
                                numberOfLines={4}
                                placeholder="Type here..."
                                textAlignVertical="top"
                            />
                        </View>
                    </View>

                    <TouchableHighlight className="py-2 mt-5 w-72 rounded-2xl justify-center items-center bg-green-800 text-center">
                        <Text className="text-white text-2xl">
                            Enviar
                        </Text>
                    </TouchableHighlight>
                </View>
                <Text className="text-center text-lg text-orange-700 mt-4">Preguntas frecuentes</Text>
                <Text className="mx-2 text-center mt-2 mb-3">¡Encuentra respuestas rápidas a tus preguntas aquí!</Text>
                <View className="bg-orange-300 shadow-lg mb-5 py-3 mt-4">
                    <View className=" rounded-lg py-2 flex-row justify-center items-center">
                        <View className="bg-white rounded-lg flex-row border-2 border-blue-800 items-center px-3">
                            <Image source={pregunta1} style={{ width: 40, height: 40 }} />
                            <Picker
                                // selectedValue={selectedValue}
                                style={{
                                    width: 270,
                                    color: '#18574F'
                                }}
                                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Ayuda para reservar" value="Más recientes" />
                                <Picker.Item label="Más relevantes" value="Más relevantes" />
                            </Picker>
                        </View>
                    </View>
                    <View className=" rounded-lg py-2 flex-row justify-center items-center ">
                        <View className="bg-white rounded-lg flex-row border-2 border-blue-800 items-center px-3">
                            <Image source={pregunta2} style={{ width: 40, height: 40 }} />
                            <Picker
                                // selectedValue={selectedValue}
                                style={{
                                    width: 270,
                                    color: '#18574F'
                                }}
                                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Problemas con el servicio" value="Más recientes" />
                                <Picker.Item label="Más relevantes" value="Más relevantes" />
                            </Picker>
                        </View>
                    </View>
                    <View className=" rounded-lg py-2 flex-row justify-center items-center ">
                        <View className="bg-white rounded-lg flex-row border-2 border-blue-800 items-center px-3">
                            <Image source={pregunta3} style={{ width: 40, height: 40 }} />
                            <Picker
                                // selectedValue={selectedValue}
                                style={{
                                    width: 270,
                                    color: '#18574F'
                                }}
                                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Pagos y devoluciones" value="Más recientes" />
                                <Picker.Item label="Más relevantes" value="Más relevantes" />
                            </Picker>
                        </View>
                    </View>
                    <View className=" rounded-lg py-2 flex-row justify-center items-center">
                        <View className="bg-white rounded-lg flex-row border-2 border-blue-800 items-center px-3">
                            <Image source={pregunta4} style={{ width: 40, height: 40 }} />
                            <Picker
                                // selectedValue={selectedValue}
                                style={{
                                    width: 270,
                                    color: '#18574F'
                                }}
                                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Otra consulta" value="Más recientes" />
                                <Picker.Item label="Más relevantes" value="Más relevantes" />
                            </Picker>
                        </View>
                    </View>
                </View>

                <View className="mb-12">
                    <View className="rounded-lg py-2 justify-center px-3 border-2 border-orange-600 mb-2">
                        <Text className="text-green-800 mb-2">¿Cómo puedo verificar la disponibilidad de horarios para realizar una reserva? </Text>
                        <Text>Para verificar la disponibilidad de horarios, navega hasta la sección de servicios en nuestra plataforma y marca en el filtro los horarios que deseas, aparecerán los servicios disponibles en ese horario. Además, puedes ingresar a cada servicio donde encontrarás un calendario con los horarios disponibles resaltados. Selecciona la fecha y hora que prefieras y procede con el proceso de reserva.</Text>
                    </View>
                    <View className="rounded-lg py-2 justify-center px-3 border-2 border-orange-600 mb-2">
                        <Text className="text-green-800 mb-2">¿Cómo puedo verificar la disponibilidad de horarios para realizar una reserva? </Text>
                        <Text>Para verificar la disponibilidad de horarios, navega hasta la sección de servicios en nuestra plataforma y marca en el filtro los horarios que deseas, aparecerán los servicios disponibles en ese horario. Además, puedes ingresar a cada servicio donde encontrarás un calendario con los horarios disponibles resaltados. Selecciona la fecha y hora que prefieras y procede con el proceso de reserva.</Text>
                    </View>
                    <View className="rounded-lg py-2 justify-center px-3 border-2 border-orange-600 mb-2">
                        <Text className="text-green-800 mb-2">¿Cómo puedo verificar la disponibilidad de horarios para realizar una reserva? </Text>
                        <Text>Para verificar la disponibilidad de horarios, navega hasta la sección de servicios en nuestra plataforma y marca en el filtro los horarios que deseas, aparecerán los servicios disponibles en ese horario. Además, puedes ingresar a cada servicio donde encontrarás un calendario con los horarios disponibles resaltados. Selecciona la fecha y hora que prefieras y procede con el proceso de reserva.</Text>
                    </View>
                </View>


            </ScrollView>
            <HeaderComponent nombre={'Centro de ayuda'} />
        </View>
    );
}