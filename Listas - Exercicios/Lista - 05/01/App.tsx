import { NavigationContainer } from "@react-navigation/native"
import { Inicio, Resumo, Form } from "./Screens"
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Seja Bem-Vindo" component={Inicio} />
        <Stack.Screen name="Formulário" component={Form} />
        <Stack.Screen name="Resumo" component={Resumo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export type RootStackParamList = {
  "Seja Bem-Vindo": undefined
  "Formulário": undefined,
  "Resumo": {
    nome: string,
    telefone: string,
    cpf: string
  }
}

export type Navigation = NativeStackNavigationProp<RootStackParamList, 'Seja Bem-Vindo'>

const Stack = createNativeStackNavigator<RootStackParamList>()
