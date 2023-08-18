import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, TouchableHighlight } from 'react-native'
import { A1 } from './assignments/A1'
import { A2 } from './assignments/A2'
import { A3 } from './assignments/A3'

export default function App() {
  const [screen, changeScreen] = useState(2)

  const wraparound = (index: number) => index > assignments.length - 1 ? 0 : index

  return (
    <View>
      <TouchableHighlight onPress={() => changeScreen(wraparound(screen + 1))}>
        <AssignmentScreen screen={screen} />
      </TouchableHighlight>
      <StatusBar style='auto' />
    </View>
  )
}

type Props = { screen: number }
function AssignmentScreen(props: Props) {
  const assignment = assignments[props.screen]

  if (!assignment) {
    throw new Error('Invalid assignment screen')
  }

  return assignment()
}

const assignments = [
  A1,
  A2,
  A3
]