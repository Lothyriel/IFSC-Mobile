import { NavigationContainer } from "@react-navigation/native"
import { DrawerNavigationProp, createDrawerNavigator } from "@react-navigation/drawer"
import { Contatos, Sobre } from "./Screens"

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Contatos" component={Contatos} />
        <Drawer.Screen name="Sobre" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export type RootStackParamList = {
  "Contatos": undefined
  "Sobre": {
    nome: string,
    telefone: string,
  }
}

export type Navigation = DrawerNavigationProp<RootStackParamList, 'Contatos'>

const Drawer = createDrawerNavigator<RootStackParamList>()
