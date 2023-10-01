import { NavigationContainer } from "@react-navigation/native"
import { Inicio, Perfil, FollowContext } from "./Screens"
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import { useState } from "react"

export default function App() {
  const [seguindo, setSeguindo] = useState(false)

  return (
    <NavigationContainer>
      <FollowContext.Provider value={{ following: seguindo, setFollow: (f) => setSeguindo(f) }}>
        <Stack.Navigator>
          <Stack.Screen name="Rede Social IFSC" component={Inicio} />
          <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
      </FollowContext.Provider >
    </NavigationContainer>
  )
}

export type Routes = {
  "Rede Social IFSC": undefined
  "Perfil": undefined,
}

export type Navigation = NativeStackNavigationProp<Routes, 'Rede Social IFSC'>

const Stack = createNativeStackNavigator<Routes>()
