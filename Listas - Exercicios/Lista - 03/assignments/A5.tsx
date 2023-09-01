import { useState } from 'react'
import colors from './colors'
import { View, Text, StyleSheet, Button } from 'react-native'

export function A5() {
  const states = [
    'Olá! Esse é o texto inicial',
    'Você clicou no botão.',
    'Clicou novamente.',
    'Se clicar de novo eu vou sumir...'
  ]

  const [index, changeIndex] = useState(0)

  return (
    <View style={styles.centered}>
      <Text style={[{ fontSize: 20, paddingBottom: '5%' }]}> {states[index]} </Text>
      <View style={{ width: '80%' }}>
        <Button title={'Próximo'} color={colors.green} onPress={() => changeIndex(index + 1)} ></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
})
