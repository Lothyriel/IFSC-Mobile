import { useState } from 'react'
import colors from './colors'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

export function A7() {
  const [output, changeOutput] = initialState()
  const [nome, changeNome] = useState('')
  const [idade, changeIdade] = useState('')

  return (
    <View style={styles.centered}>
    </View >
  )
}

function initialState(): [string, (nome: string, idade: string) => void] {
  const [output, changeOutput] = useState('')

  const handler = (nome: string, idade: string) => {
    changeOutput(`Seu nome é ${nome} e você tem ${idade} anos de idade`)
  }

  return [output, handler]
}

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
    height: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '95%',
    paddingLeft: '2%'
  }
})
