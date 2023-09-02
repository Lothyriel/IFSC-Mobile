import { useState } from 'react'
import colors from './colors'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

export function A7() {
  const [peso, changePeso] = useState('')
  const [altura, changeAltura] = useState('')
  const [imc, changeImc] = useState('')
  const [situacao, changeSituacao] = useState('')
  const [renderTable, changeRenderTable] = useState(true)

  const handler = (peso: string, altura: string) => {
    const nPeso = Number(peso)
    const nAltura = Number(altura)

    if (isNaN(nPeso) || isNaN(nAltura)) {
      return
    }

    const imc = nPeso / Math.pow(nAltura, 2)

    const situacao = getSituacao(imc)

    changeSituacao(situacao)
    changeImc(imc.toFixed(2))
    changeRenderTable(false)
  }

  return (
    <View style={{ height: '100%', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ marginTop: '10%', marginLeft: '3%', fontSize: 32, fontWeight: '600' }}>Calculadora de IMC</Text>
        <View style={styles.inputs}>
          <Text style={styles.text}>Peso:</Text>
          <TextInput style={[{ marginRight: '3%' }, styles.input]} placeholder={'Kgs'} onChangeText={changePeso}></TextInput>
          <Text style={styles.text}>Altura:</Text>
          <TextInput style={styles.input} placeholder={'Metros'} onChangeText={changeAltura}></TextInput>
        </View>
        <View style={{ width: '95%', alignSelf: 'center', marginBottom: '5%' }}>
          <Button color={colors.blue} title={'Calcular'} onPress={() => handler(peso, altura)} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.output} >
            Seu IMC é: <Text style={{ textDecorationLine: 'underline', fontWeight: '800' }} >{imc}</Text>
          </Text>
          <Text style={styles.output}>{`Situação: ${situacao}`}</Text>
        </View>
      </View>
      {renderTable && tableComponent()}
    </View >
  )
}

function tableComponent() {
  return (
    <View style={styles.table}>
      <View>
        <Text style={styles.tableTitle}>RESULTADO</Text>
        {createtableContentLeft('Abaixo de 17')}
        {createtableContentLeft('Entre 17 e 18,49')}
        {createtableContentLeft('Entre 18,5 e 24,99')}
        {createtableContentLeft('Entre 25 e 29,99')}
        {createtableContentLeft('Entre 30 e 34,99')}
        {createtableContentLeft('Entre 35 e 39,99')}
        {createtableContentLeft('Acima de 40')}
      </View>

      <View>
        <Text style={styles.tableTitle}>SITUAÇÃO</Text>
        {createtableContentRight('Muito abaixo do peso')}
        {createtableContentRight('Abaixo do peso')}
        {createtableContentRight('Peso normal')}
        {createtableContentRight('Acima do peso')}
        {createtableContentRight('Obesidade I')}
        {createtableContentRight('Obesidade II(severa)')}
        {createtableContentRight('Obesidade III (mórbida)')}
      </View>
    </View>
  )
}

function createtableContentLeft(text: string) {
  return (
    <Text style={[styles.tableContent]}>{text}</Text>
  )
}

function createtableContentRight(text: string) {
  return (
    <Text style={[{ color: 'rgb(84, 93, 119)' }, styles.tableContent]}>{text}</Text>
  )
}

function getSituacao(imc: number) {
  if (imc > 40) {
    return 'Obesidade III (mórbida)'
  }
  if (imc > 35) {
    return 'Obesidade II (severa)'
  }
  if (imc > 30) {
    return 'Obesidade I'
  }
  if (imc > 25) {
    return 'Acima do peso'
  }
  if (imc > 18.5) {
    return 'Peso normal'
  }
  if (imc > 17) {
    return 'Abaixo do peso'
  }
  return 'Muito abaixo do peso'
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '20%',
    paddingLeft: '2%'
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  },
  text: {
    marginRight: '1%'
  },
  output: {
    fontSize: 20
  },
  table: {
    borderColor: 'black',
    borderWidth: 1,
    height: '35%',
    backgroundColor: 'rgb(248, 248, 248)',
    margin: '2%',
    padding: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 15
  },
  tableContent: {
    fontSize: 15,
    marginBottom: 5
  }
})
