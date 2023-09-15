import { LinearGradient } from "expo-linear-gradient"
import { ReactNode, useState } from "react"
import { Button, View, StyleSheet, Text, TextInput } from "react-native"
import { Navigation, RootStackParamList } from "../Routes"
import { RouteProp, useNavigation } from '@react-navigation/native'


export function Inicio() {
  const navigation = useNavigation<Navigation>()

  return (
    <Linear>
      <View style={styles.container}>
        <View style={{ width: '50%' }}>
          <Button color={colors.purple} title="Acessar Formulário" onPress={() => navigation.navigate("Formulário")} />
        </View>
      </View>
    </Linear >
  )
}

export function Form() {
  const [nome, setnome] = useState("")
  const [telefone, settelefone] = useState("")
  const [cpf, setcpf] = useState("")

  const navigation = useNavigation<Navigation>()

  return (
    <Linear>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ marginVertical: '8%', fontSize: 22, fontWeight: '800' }}>
          Informe seus dados
        </Text>
        <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: '5%', marginBottom: '3%' }}>
          <View style={styles.row}>
            <Text style={styles.text}>Nome: </Text>
            <TextInput
              value={nome}
              onChangeText={setnome}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Telefone: </Text>
            <TextInput
              value={telefone}
              onChangeText={settelefone} />
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>CPF: </Text>
            <TextInput
              value={cpf}
              onChangeText={setcpf} />
          </View>
        </View>
        <Button color={colors.purple} title="Confirmar" onPress={() => navigation.navigate("Resumo", { cpf, telefone, nome })} />
      </View>
    </Linear>
  )
}

type MyScreenRouteProp = RouteProp<RootStackParamList, 'Resumo'>;

export function Resumo(props: { route: MyScreenRouteProp }) {
  const { cpf, telefone, nome } = props.route.params

  const navigation = useNavigation<Navigation>()

  return (
    <Linear>
      <View style={{ width: '100%', height: '100%', justifyContent: 'space-between' }}>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={{ marginVertical: '8%', fontSize: 22, fontWeight: '800' }}>
            Dados do Usuário
          </Text>
          <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: '5%' }}>
            <View>
              <Text style={styles.text}>Nome: <Text style={styles.output}>{nome}</Text></Text>
            </View>

            <View>
              <Text style={styles.text}>Telefone: <Text style={styles.output}>{telefone}</Text></Text>
            </View>

            <View>
              <Text style={styles.text}>CPF: <Text style={styles.output}>{cpf}</Text></Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', paddingBottom: '8%' }}>
          <View>
            <View style={{ marginBottom: '2%' }}>
              <Button color={colors.purple} title="Voltar" onPress={() => navigation.goBack()} />
            </View>
            <Button color={colors.purple} title="Voltar para o início" onPress={() => navigation.popToTop()} />
          </View>
        </View>
      </View>
    </Linear>
  )
}

function Linear(props: { children: ReactNode }) {
  return (
    <LinearGradient
      colors={[colors.pink, colors.blue]}
      style={{ height: '100%' }}
    >{props.children}</LinearGradient >
  )
}
const colors = {
  pink: 'rgb(240, 162, 189)',
  blue: 'rgb(189, 198, 241)',
  purple: 'rgb(128, 0, 128)'
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    width: '100%',
    marginBottom: '3%',
    flexDirection: 'row',
    fontSize: 20,
    borderBottomWidth: 2,
    borderColor: colors.purple
  },
  text: {
    fontSize: 16,
    marginRight: '1%',
    fontWeight: "800",
  },
  output: {
    fontSize: 16,
    fontWeight: "400"
  }
})
