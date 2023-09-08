import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, TouchableHighlight } from 'react-native'
import { A1, A2 } from './assignments/Tabuada'
import { A3, A4, A5 } from './assignments/Cadastro'

export default function App() {
  const [screen, changeScreen] = useState(1)
  const screens = 5
  const wrap = (index: number) => index > screens ? 1 : index

  return (
    <View>
      <TouchableHighlight onPress={() => changeScreen(wrap(screen + 1))}>
        <AssignmentScreen screen={screen} />
      </TouchableHighlight>
      <StatusBar style='auto' />
    </View>
  )
}

type Props = { screen: number }
function AssignmentScreen(props: Props) {
  switch (props.screen) {
    case 1:
      return <A1 />
    case 2:
      return <A2 />
    case 3:
      return <A3 />
    case 4:
      return <A4 />
    case 5:
      return <A5 />

    default:
      throw new Error('Invalid assignment screen')
  }
}
