import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, TouchableHighlight } from 'react-native'
import { A1 } from './assignments/A1'
import { A2 } from './assignments/A2'
import { A3 } from './assignments/A3'
import { A4 } from './assignments/A4'
import { A5 } from './assignments/A5'
import { A9 } from './assignments/A9'
import { A6 } from './assignments/A6'
import { A7 } from './assignments/A7'
import { A8 } from './assignments/A8'

export default function App() {
  const [screen, changeScreen] = useState(8)
  const screens = 9
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
    case 6:
      return <A6 />
    case 7:
      return <A7 />
    case 8:
      return <A8 />
    case 9:
      return <A9 />

    default:
      throw new Error('Invalid assignment screen')
  }
}
