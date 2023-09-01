import { useState } from 'react'
import colors from './colors'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

export function A6() {
  const [output, changeOutput] = initialState()
  const [nome, changeNome] = useState('')
  const [idade, changeIdade] = useState('')

  return (
    <View style={styles.centered}>
      <Text style={{ fontSize: 30, fontWeight: '600', paddingVertical: '5%' }}> Dados do Usuário </Text>
      <View style={styles.input}>
        <TextInput placeholder={'Nome'} onChangeText={changeNome}></TextInput>
      </View>
      <View style={[{ marginVertical: '3%' }, styles.input]}>
        <TextInput placeholder={'Idade'} onChangeText={changeIdade}></TextInput>
      </View>
      <Button title={'CONFIRMAR'} color={colors.purple} onPress={() => changeOutput(nome, idade)} ></Button>
      <View style={{ width: '95%' }} >
        <Text style={{ fontSize: 20, paddingVertical: '5%', textAlign: 'center' }}> {output} </Text>
      </View>
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
