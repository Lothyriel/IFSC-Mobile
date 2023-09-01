import { useState } from 'react'
import colors from './colors'
import { View, Text, StyleSheet, Button } from 'react-native'

export function A4() {
  const [text, changeText] = initialState()

  const createButton = (numero: string, color: string) => {
    const handler = () => changeText(numero)
    return <Button title={`BOTÃO ${numero}`} color={color} onPress={handler} ></Button>
  }

  return (
    <View style={{ height: '100%' }}>
      <Text style={[{ fontSize: 20 }, styles.centered]}> {text} </Text>
      {createButton('1', colors.green)}
      {createButton('2', colors.blue)}
      {createButton('3', colors.orange)}
    </View>
  )
}

function initialState(): [string, (numero: string) => void] {
  const [text, changeText] = useState('Clique em algum dos botões!')
  const handlerChangeText = (number: string) => changeText(`Você clicou no botão ${number}`)
  return [text, handlerChangeText]
}

const styles = StyleSheet.create({
  centered: {
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: '5%'
  }
})
