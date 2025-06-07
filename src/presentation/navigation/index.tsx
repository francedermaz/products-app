import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductListScreen } from "../screens/ProductListScreen";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ["products://"],
  config: {
    screens: {
      Home: {
        path: "category/:slug?",
        parse: {
          slug: (slug: string) => slug,
        },
      },
      ProductDetail: {
        path: "product/:id",
        parse: {
          id: (id: string) => Number(id),
        },
      },
    },
  },
};

export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={ProductListScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
