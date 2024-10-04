import { Link } from "expo-router"
import { View, Image, ScrollView, Text, Dimensions } from "react-native";
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const barra1 = require('../../assets/fondoPantalla.png')
const barra2 = require('../../assets/barra2.png')

const logo = require('../../assets/Logoprincipal.png')
const iconoPerfilUsuario = require('../../assets/iconoPerfilUsuario.png')

//iconos de lista
const vector = require('../../assets/perfil/Vector.png')
const uno = require('../../assets/perfil/uno.png')
const dos = require('../../assets/perfil/dos.png')
const tres = require('../../assets/perfil/tres.png')
const cuatro = require('../../assets/perfil/cuatro.png')
const cinco = require('../../assets/perfil/cinco.png')
const seis = require('../../assets/perfil/seis.png')
const siete = require('../../assets/perfil/siete.png')
const ocho = require('../../assets/perfil/ocho.png')
const nueve = require('../../assets/perfil/nueve.png')
const diez = require('../../assets/perfil/diez.png')
const cerrarsession = require('../../assets/perfil/cerrarsession.png')


export function PerfilPage() {
    const containerWidth  = Dimensions.get('window').width * 0.90; 
    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded mb-20" />
                <Image source={barra2} className="w-full rounded mt-96" />
            </View>
            <ScrollView >
                <View className="items-center mt-9">
                    <Image source={logo} style={{ width: 80, height: 60 }} />
                </View>
                <View className="items-center mt-6">
                    <Image source={iconoPerfilUsuario} />
                    <Text className="text-2xl mt-1">Pedro Jóse González Ruiz profe</Text>
                </View>
                <View className="mt-8">
                    <Link href={'/docente/actualizar-perfil'} className="bg-slate-100 border-orange-500 border-2 mx-3 rounded-lg py-4 mt-5">
                        <View className="mx-5 flex-row justify-around items-center" style={{width:containerWidth}}>
                            <View className="flex-row items-center" style={{ width: 250 }}>
                                <Image source={uno} resizeMethod="contain" style={{ height: 45, width:40 }} />
                                <Text className="text-lg ml-4">Actualizar perfil</Text>
                            </View>
                            <Image source={vector} />
                        </View>
                    </Link>

                    <Link href={'/docente/misRecursos'} className="bg-slate-100 border-orange-500 border-2 mx-3 rounded-lg py-4 mt-5">
                        <View className="mx-5 flex-row justify-around items-center" style={{width:containerWidth}}>
                            <View className="flex-row items-center" style={{ width: 250 }}>
                                <Image source={tres} resizeMethod="contain" style={{ height: 40, width:40 }} />
                                <Text className="text-lg ml-4">Mis recursos</Text>
                            </View>
                            <Image source={vector} />
                        </View>
                    </Link>

                    <Link href={'/global/misPruebas'} className="bg-slate-100 border-orange-500 border-2 mx-3 rounded-lg py-4 mt-5">
                        <View className="mx-5 flex-row justify-around items-center" style={{width:containerWidth}}>
                            <View className="flex-row items-center" style={{ width: 250 }}>
                                <Image source={cuatro} resizeMethod="contain" style={{ height: 40, width:40 }} />
                                <Text className="text-lg ml-4">Mis pruebas</Text>
                            </View>
                            <Image source={vector} />
                        </View>
                    </Link>

                    <Link href={'/global/misFacturas'} className="bg-slate-100 border-orange-500 border-2 mx-3 rounded-lg py-4 mt-5">
                        <View className="mx-5 flex-row justify-around items-center" style={{width:containerWidth}}>
                            <View className="flex-row items-center" style={{ width: 250 }}>
                                <Image source={cinco} resizeMethod="contain" style={{ height: 40, width:40 }} />
                                <Text className="text-lg ml-4">Mis facturas</Text>
                            </View>
                            <Image source={vector} />
                        </View>
                    </Link>

                    <Text className="mt-5 ml-5 text-3xl">Soporte</Text>

                    <Link href={'/global/quienes-somos'} className="bg-slate-100 border-orange-500 border-2 mx-3 rounded-lg py-4 mt-5">
                        <View className="mx-5 flex-row justify-around items-center" style={{width:containerWidth}}>
                            <View className="flex-row items-center" style={{ width: 250 }}>
                                <Image source={seis} resizeMethod="contain" style={{ height: 45, width:40 }} />
                                <Text className="text-lg ml-4">¿Quiénes somos?</Text>
                            </View>
                            <Image source={vector} />
                        </View>
                    </Link>

                    <Link href={'/global/como-funciona'} className="bg-slate-100 border-orange-500 border-2 mx-3 rounded-lg py-4 mt-5">
                        <View className="mx-5 flex-row justify-around items-center" style={{width:containerWidth}}>
                            <View className="flex-row items-center" style={{ width: 250 }}>
                                <Image source={siete} resizeMethod="contain" style={{ height: 35, width:40 }} />
                                <Text className="text-lg ml-4">¿Cómo funciona?</Text>
                            </View>
                            <Image source={vector} />
                        </View>
                    </Link>

                    <Link href={'/global/nuestra-seguridad'} className="bg-slate-100 border-orange-500 border-2 mx-3 rounded-lg py-4 mt-5">
                        <View className="mx-5 flex-row justify-around items-center" style={{width:containerWidth}}>
                            <View className="flex-row items-center" style={{ width: 250 }}>
                                <Image source={ocho} resizeMethod="contain" style={{ height: 45, width:40 }} />
                                <Text className="text-lg ml-4">Nuestra seguridad</Text>
                            </View>
                            <Image source={vector} />
                        </View>
                    </Link>

                    <Link href={'/global/testimonios'} className="bg-slate-100 border-orange-500 border-2 mx-3 rounded-lg py-4 mt-5">
                        <View className="mx-5 flex-row justify-around items-center" style={{width:containerWidth}}>
                            <View className="flex-row items-center" style={{ width: 250 }}>
                                <Image source={nueve} resizeMethod="contain" style={{ height: 45, width:40 }} />
                                <Text className="text-lg ml-4">Testimonios</Text>
                            </View>
                            <Image source={vector} />
                        </View>
                    </Link>

                    <Link href={'/global/centro-ayuda'} className="bg-slate-100 border-orange-500 border-2 mx-3 rounded-lg py-4 mt-5">
                        <View className="mx-5 flex-row justify-around items-center" style={{width:containerWidth}}>
                            <View className="flex-row items-center" style={{ width: 250 }}>
                                <Image source={diez} resizeMethod="contain" style={{ height: 40, width:40 }} />
                                <Text className="text-lg ml-4">Centro de ayuda</Text>
                            </View>
                            <Image source={vector} />
                        </View>
                    </Link>
                </View>
                <View className="mt-8 mb-20 items-center justify-center">
                    <Link href={'/'} className="mt-10 py-6 px-9 rounded-2xl bg-blue-600 text-center">
                        <View className="justify-center items-center flex-row">
                            <Text className="pr-5 text-white text-2xl" >
                                Cerrar sesión
                            </Text>
                            <Image source={cerrarsession} resizeMethod="contain" style={{width:30, height:30}}/>
                        </View>
                    </Link>
                </View>

            </ScrollView>

        </View>


    );
}