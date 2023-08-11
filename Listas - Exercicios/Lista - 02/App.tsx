import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, TouchableHighlight } from 'react-native'
import { A1a, A1b, A1c } from './assignments/A1'
import { A2a, A2b, A2c } from './assignments/A2'
import { A3a, A3b, A3c } from './assignments/A3'

export default function App() {
  const [screen, changeScreen] = useState(8)

  return (
    <View>
      <TouchableHighlight onPress={() => changeScreen(wraparound(screen + 1))}>
        <AssignmentScreen screen={screen} />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  )
}

type Props = { screen: number }
function AssignmentScreen(props: Props) {
  const assignment = assignments[props.screen]

  if (!assignment) {
    throw new Error("Invalid assignment screen")
  }

  return assignment()
}

function wraparound(index: number) {
  return index > assignments.length - 1 ? 0 : index
}

const assignments = [
  A1a,
  A1b,
  A1c,
  A2a,
  A2b,
  A2c,
  A3a,
  A3b,
  A3c
]