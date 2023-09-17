import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Imc, PesoIdeal, SuperficieCorporea } from './Screens'

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator backBehavior='history' screenOptions={{ headerShown: false }}>
        <Tab.Screen name="imc" component={Imc} options={{
          tabBarIcon: () => <Ionicons name="calculator" size={24} color="black" />
        }} />
        <Tab.Screen name="peso" component={PesoIdeal} options={{
          tabBarIcon: () => <MaterialCommunityIcons name="scale-bathroom" size={24} color="black" />
        }} />
        <Tab.Screen name="superficie" component={SuperficieCorporea} options={{
          tabBarIcon: () => <MaterialCommunityIcons name="human" size={24} color="black" />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export type Routes = {
  "imc": undefined
  "peso": undefined,
  "superficie": undefined
}

export type Navigation = BottomTabNavigationProp<Routes, 'imc'>

const Tab = createBottomTabNavigator<Routes>()
