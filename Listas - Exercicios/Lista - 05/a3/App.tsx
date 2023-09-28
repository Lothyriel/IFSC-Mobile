import { NavigationContainer } from "@react-navigation/native"
import { DrawerNavigationProp, createDrawerNavigator } from "@react-navigation/drawer"
import { Contatos, Sobre, Info } from "./Screens"

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Contatos" component={Contatos} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Informações" component={Info} options={{
          drawerItemStyle: { display: 'none' }
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export type AppRoutes = {
  "Contatos": undefined
  "Sobre": undefined,
  "Informações": {
    nome: string
    telefone: string
  }
}

export type AppNavigation = DrawerNavigationProp<AppRoutes, 'Contatos'>

const Drawer = createDrawerNavigator<AppRoutes>()
