import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { InicioPage } from "./pages/inicio";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
      <SafeAreaProvider>
      <View style={styles.container} className="bg-red-600">
        <StatusBar style="light" />
        <InicioPage />
      </View>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
