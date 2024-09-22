import { Link } from "expo-router"
import { View, Image, Text, ScrollView } from "react-native";
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const study = require('../../assets/study.png')
const barra1 = require('../../assets/fondo2.png')
const logo = require('../../assets/logoOtro.png')
const boys = require('../../assets/niños.png')

//clases
const íconodeclasesparticulares = require('../../assets/íconodeclasesparticulares.png')
const clasesGrupales = require('../../assets/clasesGrupales.png')
const couchingVirtual = require('../../assets/couchingVirtual.png')
const cursos = require('../../assets/cursos.png')
const docentes = require('../../assets/docentes.png')

//navegacion
const navegacion1 = require('../../assets/navegacion1.png')
const navegacion2 = require('../../assets/navegacion2.png')
const navegacion3 = require('../../assets/navegacion3.png')
const navegacion4 = require('../../assets/navegacion4.png')

//loadImg

export function InicioStudentPage() {
    return (
        <View className="flex-1">
            <View className=" flex-1">
                <Image source={barra1} className="w-full rounded mb-20" />
            </View>
            <ScrollView >
                <View className="w-full flex-row justify-center items-center px-3 absolute mt-5">
                    <Image source={logo} className="mr-3" style={{ width: 90, height: 60 }} />
                </View>
                <View className="flex-1 mt-24">
                    <Image source={study} className="w-full rounded" />
                    <Text className="text-center text-orange-500 text-3xl mt-5">¡Bienvenido José Pérez!</Text>
                    <View className="flex-row justify-around items-center mt-2">
                        <Text className="w-44 ml-10 mr-0 text-base">Elige el servicio que más se adapte a tus necesidades</Text>
                        <Image source={boys} />
                    </View>
                </View>
                <View className="items-center">
                    <Link href={'/estudiante/inicio'} className="py-3 mt-4 w-96 rounded-2xl justify-center items-center bg-teal-800 text-center">
                        <Text className="text-white text-2xl p-10">
                            Clases
                        </Text>
                    </Link>
                </View>
                <Text className=" text-lg ml-6 mt-4">¿Qué encontrarás?</Text>
                <View className="flex-row items-center ml-5 mt-3">
                    <View className="bg-orange-500 p-4 items-center rounded-2xl mr-5">
                        <Image source={íconodeclasesparticulares} />
                    </View>
                    <Text className="text-xl w-52">Clases particulares</Text>
                </View>
                <View className="flex-row items-center ml-5 mt-3">
                    <View className="bg-orange-500 p-4 items-center rounded-2xl mr-5">
                        <Image source={clasesGrupales} />
                    </View>
                    <Text className="text-xl w-52">Clases grupales</Text>
                </View>
                <View className="flex-row items-center ml-5 mt-3">
                    <View className="bg-orange-500 p-4 items-center rounded-2xl mr-5">
                        <Image source={couchingVirtual} />
                    </View>
                    <Text className="text-xl w-52">Coaching individual para docentes</Text>
                </View>

                <View className="items-center">
                    <Link href={'/estudiante/inicio'} className="py-3 mt-4 w-96 rounded-2xl justify-center items-center bg-blue-600 text-center">
                        <Text className="text-white text-2xl p-10">
                            Cursos
                        </Text>
                    </Link>
                </View>
                <Text className=" text-lg ml-6 mt-4">¿Qué encontrarás?</Text>
                <View className="flex-row items-center ml-5 mt-3">
                    <View className="bg-orange-500 p-4 items-center rounded-2xl mr-5">
                        <Image source={cursos} />
                    </View>
                    <Text className="text-xl w-52">Cursos</Text>
                </View>
                <View className="flex-row items-center ml-5 mt-3 mb-12">
                    <View className="bg-orange-500  p-4 items-center rounded-2xl mr-5">
                        <Image source={docentes} />
                    </View>
                    <Text className="text-xl w-52">Coaching para docentes</Text>
                </View>


            </ScrollView>



        </View>


    );
}