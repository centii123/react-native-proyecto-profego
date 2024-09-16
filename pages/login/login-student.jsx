import { Link } from "expo-router"
import { View, Image, Text, TextInput } from "react-native";
//import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
const principalImg = require('../../assets/loginEstudiante.png')
const icono_atras = require('../../assets/IconoAtras.png')
const barra2 = require('../../assets/barra2.png')
const logo = require('../../assets/Logoprincipal.png')

export function LoginStudentPage() {
    return (
        <View className="flex-1 justify-between">
            <Image source={principalImg} className="w-full rounded" />
            <View className="absolute ml-48 top-28 justify-center items-center">
                <Text className="text-2xl w-40 text-center text-white mb-3">Soy</Text>
                <Text className="text-lg bg-white border-orange-500 border-2 w-48 py-2 text-center mb-3 rounded-xl">
                    Estudiante
                </Text>
                <Link href={'/login-teacher'} className="text-lg bg-blue-600 border-white border-2 w-40 py-2 text-center text-slate-50 mb-3 rounded-xl">
                    Docente o coach
                </Link>
            </View>
            <View className="items-center">
                <Text className="text-2xl my-2">¡Hola de nuevo a Profe Go!</Text>
                <View>
                    <Text className="text-lg text-start mb-2 text-green-900">Cédula</Text>
                    <View className="w-80 py-3 px-6 border-orange-500 border-4 rounded-2xl">
                        <TextInput />
                    </View>
                </View>
                <View className="mt-2">
                    <Text className="text-lg text-start mb-2 text-green-900">Contraseña</Text>
                    <View className="w-80 py-3 px-6 border-orange-500 border-4 rounded-2xl">
                        <TextInput />
                    </View>
                </View>
                <Link href={'/'} className="w-full text-right text-blue-600 mt-3 mr-28">
                    ¿Olvidaste tu contraseña?
                </Link>
                <Link href={'/estudiante/inicio'} className="py-3 mt-4 w-72 rounded-2xl justify-center items-center bg-orange-500 text-center">
                    <Text className="text-white text-2xl p-10">
                    Ingresar
                    </Text>
                </Link>
            </View>
            <View className="relative justify-center items-center">
                <Image source={barra2} className="w-full rounded" />
                <Text className="absolute text-green-700">¿No tienes una cuenta? <Link href={'/register-student'} className="text-orange-500">
                    Regístrate aquí
                </Link> </Text>
            </View>
            <View className="w-full flex-row justify-between items-center px-3 absolute mt-5">
                <Link href={'/'}>
                    <View className="bg-orange-500 rounded-full p-3">
                        <Image source={icono_atras} />
                    </View>
                </Link>
                <Text className="text-white text-2xl">Iniciar sesión</Text>
                <Image source={logo} className="mr-3" style={{ width: 80, height: 60 }} />
            </View>
        </View>
        
    );
}