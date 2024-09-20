import { Tabs } from 'expo-router';
import { Image } from "react-native";
const navegacion1 = require('../../../assets/navegacion1.png')
const navegacion2 = require('../../../assets/navegacion2.png')
const navegacion3 = require('../../../assets/navegacion3.png')
const navegacion4 = require('../../../assets/navegacion4.png')

export default function tapsEstudiante() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#1d4ed8',
            },
            tabBarLabelStyle: {
                color: 'white',
                
            }
        }}>
            <Tabs.Screen
                name="inicio"
                options={{
                    tabBarIcon: () => <Image source={navegacion1} />,
                    title: 'Inicio'
                }}
            />

            <Tabs.Screen
                name="servicio"
                options={{
                    tabBarIcon: () => <Image source={navegacion2} />,
                    title: 'Mis servicios'
                }}
            />

            <Tabs.Screen
                name="notificaciones"
                options={{
                    tabBarIcon: () => <Image source={navegacion3} />,
                    title: 'Notificaciones'
                }}
            />

            <Tabs.Screen
                name="perfil"
                options={{
                    tabBarIcon: () => <Image source={navegacion4} />,
                    title: 'Mi perfil'
                }}
            />
        </Tabs>
    );
}