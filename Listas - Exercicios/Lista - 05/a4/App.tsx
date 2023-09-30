import { NavigationContainer } from "@react-navigation/native"
import { Inicio, Perfil } from "./Screens"
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rede Social IFSC" component={Inicio} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export type Routes = {
  "Rede Social IFSC": undefined
  "Perfil": undefined,
}

export type Navigation = NativeStackNavigationProp<Routes, 'Rede Social IFSC'>

const Stack = createNativeStackNavigator<Routes>()
