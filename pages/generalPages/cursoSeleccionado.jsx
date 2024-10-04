import { Link } from "expo-router"
import { useState } from "react";
import { View, Text, ScrollView, TouchableHighlight, Image, Dimensions } from "react-native";
import HeaderComponent from "../components/header";
import { Picker } from '@react-native-picker/picker';
import BuscadorComponent from "../components/buscador";

//imagenes
const tareas = require('../../assets/tareas.png')
export function CursosPage() {
    const anchuraPantalla=Dimensions.get('window').width;
    const [tarea, setTarea] = useState(true);
    const [asistencia, setAsistencia] = useState(false);

    const [mes, setMes] = useState(null);
    const [dia, setDia] = useState(null);
    const [year, setYear] = useState(null);


    return (
        <View className="flex-1">
            <Text className="text-center text-base mt-20 mx-3 text-orange-500">Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas</Text>
            <View className="flex-row justify-center my-2">
                <TouchableHighlight
                    onPress={() => {
                        setAsistencia(false)
                        setTarea(true)
                    }}
                    underlayColor={'#F0C491'}
                    className={`${tarea == true ? "bg-orange-500" : "bg-white"} w-40 py-1 rounded-tl-md rounded-bl-md border-2 border-orange-500`}
                >
                    <Text className={`${tarea == true ? "text-white" : ""} text-center text-base`}>Tareas</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        setAsistencia(true)
                        setTarea(false)
                    }}
                    underlayColor={'#F0C491'}
                    className={`${asistencia == true ? "bg-orange-500" : "bg-white"} w-40 py-1 rounded-tr-md rounded-br-md border-2 border-orange-500 border-l-0`}
                >
                    <Text className={`${asistencia == true ? "text-white" : ""} text-center text-base`}>Asistencias</Text>
                </TouchableHighlight>
            </View>



            <ScrollView className={`${asistencia == true ? '' : 'hidden'}`}>

                <View className="border-blue-700 border-2 items-center py-3 mt-4 mx-4">
                    <Text className="mb-2 font-bold">Filtros</Text>
                    <View className="flex-row flex-grow mb-2">
                        <Picker
                            selectedValue={dia}
                            style={{
                                width: 110,
                                color: '#18574F',
                                backgroundColor: 'white',
                            }}
                            onValueChange={(itemValue) => setDia(itemValue)}
                        >
                            <Picker.Item label="100" value="1" />
                            <Picker.Item label="Más relevantes" value="Más relevantes" />
                        </Picker>
                        <Picker
                            selectedValue={mes}
                            style={{
                                width: 160,
                                color: '#18574F',
                                marginLeft: 15,
                                backgroundColor: 'white'
                            }}
                            onValueChange={(itemValue) => setMes(itemValue)}
                        >
                            <Picker.Item label="Diciembre" value="Enero" />
                            <Picker.Item label="Más relevantes" value="Más relevantes" />
                        </Picker>


                    </View>
                    <Picker
                        selectedValue={year}
                        style={{
                            width: 190,
                            color: '#18574F',
                            backgroundColor: 'white'
                        }}
                        onValueChange={(itemValue) => setYear(itemValue)}
                    >
                        <Picker.Item label="2001" value="2001" />
                        <Picker.Item label="Más relevantes" value="Más relevantes" />
                    </Picker>
                </View>
                <View className=" mx-4 mt-3 mb-5">
                    <View className="flex-row">
                        <Text className="text-center border-b-2 border-blue-700 font-bold text-base text-blue-700" style={{ width: '50%' }}>Fechas</Text>
                        <Text className="text-center border-b-2 border-blue-700 font-bold text-base text-blue-700" style={{ width: '50%' }}>Asistencia</Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-center border-b-2 border-blue-700" style={{ width: '50%' }}>10/05/2001</Text>
                        <Text className="text-center border-b-2 border-blue-700  text-green-500" style={{ width: '50%' }}>✓</Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-center border-b-2 border-blue-700  " style={{ width: '50%' }}>10/05/2001</Text>
                        <Text className="text-center border-b-2 border-blue-700  text-red-500" style={{ width: '50%' }}>x</Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-center border-b-2 border-blue-700  " style={{ width: '50%' }}>10/05/2001</Text>
                        <Text className="text-center border-b-2 border-blue-700  text-red-500" style={{ width: '50%' }}>x</Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-center border-b-2 border-blue-700  " style={{ width: '50%' }}>10/05/2001</Text>
                        <Text className="text-center border-b-2 border-blue-700  text-red-500" style={{ width: '50%' }}>x</Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-center border-b-2 border-blue-700  " style={{ width: '50%' }}>10/05/2001</Text>
                        <Text className="text-center border-b-2 border-blue-700  text-red-500" style={{ width: '50%' }}>x</Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-center border-b-2 border-blue-700 " style={{ width: '50%' }}>10/05/2001</Text>
                        <Text className="text-center border-b-2 border-blue-700  text-red-500" style={{ width: '50%' }}>x</Text>
                    </View>

                </View>
            </ScrollView>

            <TouchableHighlight
                onPress={() => { alert('hola') }}
                className={`${asistencia == true ? '' : 'hidden'} absolute top-3/4 bg-orange-600 px-5 py-3 rounded-full mt-14 mr-16`} style={{ left: '80%' }}>
                <Text className="text-white text-3xl">+</Text>
            </TouchableHighlight>


            <ScrollView className={`${tarea == true ? '' : 'hidden'}`}>
                <BuscadorComponent className="mt-0" />
                <View className="mb-14 ">

                    <View className="items-center mt-2">
                        <Link href={'/global/tareas'} children>
                            <View className="bg-white shadow-lg rounded-lg p-4 pr-0 border-2 border-orange-500" style={{width: anchuraPantalla * 0.80}}>
                                <Text className="text-blue-700 text-base font-bold">{'Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas'.slice(0, 70)}...</Text>
                                <View className="flex-row items-center mt-2">
                                    <Image source={tareas} className=" mr-3" style={{ width: 40, height: 40 }} />
                                    <View className="my-1 justify-center">
                                        <Text className="text-slate-600 text-xs">Creacion: 02-01-2001 - 02:01</Text>
                                        <Text className="text-slate-600 text-xs">Entrega: 02-01-2001 - 02:01</Text>
                                    </View>

                                </View>
                                <View className="flex-row items-center">
                                    <Text >{'lorem sdsdfsdf sdf sd fsd fsd fs df sdf sdf sd fsd fs dfs df sdf sdf'.slice(0, 40)}...</Text>
                                </View>
                            </View>
                        </Link>
                    </View>
                    
                    <View className="items-center mt-2">
                        <Link href={'/global/tareas'} children>
                            <View className="bg-white shadow-lg rounded-lg p-4 pr-0 border-2 border-orange-500" style={{width: anchuraPantalla * 0.80}}>
                                <Text className="text-blue-700 text-base font-bold">{'Introducción a la Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas'.slice(0, 70)}...</Text>
                                <View className="flex-row items-center mt-2">
                                    <Image source={tareas} className=" mr-3" style={{ width: 40, height: 40 }} />
                                    <View className="my-1 justify-center">
                                        <Text className="text-slate-600 text-xs">Creacion: 02-01-2001 - 02:01</Text>
                                        <Text className="text-slate-600 text-xs">Entrega: 02-01-2001 - 02:01</Text>
                                    </View>

                                </View>
                                <View className="flex-row items-center">
                                    <Text >{'lorem sdsdfsdf sdf sd fsd fsd fs df sdf sdf sd fsd fs dfs df sdf sdf'.slice(0, 40)}...</Text>
                                </View>
                            </View>
                        </Link>
                    </View>
                </View>
            </ScrollView>

            <TouchableHighlight
                onPress={() => { alert('hola profesor') }}
                className={`${tarea == true ? '' : 'hidden'} absolute top-3/4 bg-orange-600 px-5 py-3 rounded-full mt-14 mr-16`} style={{ left: '80%' }}>
                <Text className="text-white text-3xl">+</Text>
            </TouchableHighlight>
            <HeaderComponent nombre={'Curso'} />

        </View>
    );
}