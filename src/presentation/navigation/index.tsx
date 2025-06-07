import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "../screens/ProductListScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f5f5f5",
          },
          headerTitle: "Productos",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "System",
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Home" component={ProductListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
