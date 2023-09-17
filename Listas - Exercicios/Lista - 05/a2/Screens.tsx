import { useState, useMemo } from "react"
import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group'

export function Imc() {
  const [peso, changePeso] = useState('')
  const [altura, changeAltura] = useState('')
  const [imc, changeImc] = useState('')
  const [situacao, changeSituacao] = useState('')

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

  const handler = (peso: string, altura: string) => {
    const nPeso = parseInt(peso)
    const nAltura = parseInt(altura)

    if (isNaN(nPeso) || isNaN(nAltura)) {
      return
    }

    const imc = nPeso / Math.pow(nAltura, 2)

    const situacao = getSituacao(imc)

    changeSituacao(situacao)
    changeImc(imc.toFixed(2))
  }

  return (
    <View style={{ height: '100%', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ marginTop: '10%', marginLeft: '3%', fontSize: 30, fontWeight: '600' }}>Calculadora de IMC</Text>
        <View style={styles.inputs}>
          <Text style={styles.text}>Peso:</Text>
          <TextInput style={[{ marginRight: '3%' }, styles.input]} placeholder={'Kgs'} onChangeText={changePeso}></TextInput>
          <Text style={styles.text}>Altura:</Text>
          <TextInput style={styles.input} placeholder={'Metros'} onChangeText={changeAltura}></TextInput>
        </View>
        <View style={{ width: '95%', alignSelf: 'center', marginBottom: '5%' }}>
          <Button color="rgb(0, 0, 255)" title={'Calcular'} onPress={() => handler(peso, altura)} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.output} >
            Seu IMC é: <Text style={{ textDecorationLine: 'underline', fontWeight: '800' }} >{imc}</Text>
          </Text>
          <Text style={styles.output}>{`Situação: ${situacao}`}</Text>
        </View>
      </View>
    </View >
  )
}

export function PesoIdeal() {
  const [altura, changeAltura] = useState('')
  const [pesoIdeal, changePesoIdeal] = useState('')

  const radioProps: RadioButtonProps[] = useMemo(() => ([
    {
      id: '1',
      label: 'Masculino',
      borderColor: 'gray',
      color: 'blue'
    },
    {
      id: '2',
      label: 'Feminino',
      borderColor: 'gray',
      color: 'blue'
    }
  ]), []);

  const [selectedSexoId, setSelectedId] = useState("1");

  const handler = (altura: string) => {
    const nAltura = parseInt(altura)

    if (isNaN(nAltura)) {
      return
    }

    const multiplicadorSexo = selectedSexoId === '1' ? 0.75 : 0.67

    const pesoIdeal = 52 + (multiplicadorSexo * (nAltura - 152.4))

    changePesoIdeal(pesoIdeal.toFixed(2))
  }

  return (
    <View style={{ height: '100%', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ marginTop: '10%', marginLeft: '3%', fontSize: 30, fontWeight: '600' }}>Calculadora de Peso Ideal</Text>
        <View style={styles.inputs}>
          <Text style={styles.text}>Altura:</Text>
          <TextInput style={styles.input} placeholder={'cm'} onChangeText={changeAltura}></TextInput>
        </View>

        <RadioGroup
          containerStyle={{ flexDirection: 'row', alignSelf: 'center', marginBottom: '5%' }}
          radioButtons={radioProps}
          onPress={setSelectedId}
          selectedId={selectedSexoId}
        />

        <View style={{ width: '95%', alignSelf: 'center', marginBottom: '5%' }}>
          <Button color="rgb(0, 0, 255)" title={'Calcular'} onPress={() => handler(altura)} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.output} >
            Seu peso ideal é: <Text style={{ textDecorationLine: 'underline', fontWeight: '800' }} >{pesoIdeal}</Text> quilos.
          </Text>
        </View>
      </View>
    </View >
  )
}

export function SuperficieCorporea() {
  const [peso, changePeso] = useState('')
  const [altura, changeAltura] = useState('')
  const [superficie, changeSuperficie] = useState('')

  const handler = (peso: string, altura: string) => {
    const nPeso = parseInt(peso)
    const nAltura = parseInt(altura)

    if (isNaN(nPeso) || isNaN(nAltura)) {
      return
    }

    const superficie = 0.007184 * Math.pow(nAltura, 0.725) * Math.pow(nPeso, 0.425)
    changeSuperficie(superficie.toFixed(2))
  }

  return (
    <View style={{ height: '100%', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ marginTop: '10%', marginLeft: '3%', fontSize: 30, fontWeight: '600' }}>Calculadora de Superfície</Text>
        <View style={styles.inputs}>
          <Text style={styles.text}>Peso:</Text>
          <TextInput style={[{ marginRight: '3%' }, styles.input]} placeholder={'Kgs'} onChangeText={changePeso}></TextInput>
          <Text style={styles.text}>Altura:</Text>
          <TextInput style={styles.input} placeholder={'cm'} onChangeText={changeAltura}></TextInput>
        </View>
        <View style={{ width: '95%', alignSelf: 'center', marginBottom: '5%' }}>
          <Button color="rgb(0, 0, 255)" title={'Calcular'} onPress={() => handler(peso, altura)} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.output} >
            Sua superfície corpórea é: <Text style={{ textDecorationLine: 'underline', fontWeight: '800' }} >{superficie}</Text> m².
          </Text>
        </View>
      </View>
    </View >
  )
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
