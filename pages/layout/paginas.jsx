import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

export function PaginaPadin({ children }) {
    const insets=useSafeAreaInsets();
    return (
      <View className="flex-1" style={{paddingTop:insets.top}}>
        { children }
      </View>
    );
  }