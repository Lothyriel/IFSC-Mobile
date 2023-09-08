import { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert, FlatList } from 'react-native'

export function A3() {
  const [nome, setnome] = useState("")
  const [idade, setidade] = useState("")
  const [cpf, setcpf] = useState("")

  const handler = () => {
    if ([nome, idade, cpf].some(x => x == "")) {
      errorAlert()
    } else {
      Alert.alert('Alert', `Nome: ${nome}\nIdade: ${idade}\nCPF: ${cpf}`, [
        { text: 'OK' }
      ])
    }
  }

  return (
    <View style={styles.container}>
      {Header([nome, setnome], [idade, setidade], [cpf, setcpf])}
      <Button color={colors.green} title="Confirmar" onPress={handler} />
    </View >
  )
}

type User = { nome: string, idade: string, cpf: string }
export function A4() {
  const [nome, setnome] = useState("")
  const [idade, setidade] = useState("")
  const [cpf, setcpf] = useState("")
  const [users, setusers] = useState<User[]>([])

  const handler = () => {
    if ([nome, idade, cpf].some(x => x == "")) {
      errorAlert()
    } else {
      setusers([...users, { nome, idade, cpf }])
    }
  }

  return (
    <View style={styles.container}>
      {Header([nome, setnome], [idade, setidade], [cpf, setcpf])}

      <Button color={colors.green} title="Confirmar" onPress={handler} />

      {usersContainer(users)}
    </View >
  )
}

export function A5() {
  const [nome, setnome] = useState("")
  const [idade, setidade] = useState("")
  const [cpf, setcpf] = useState("")
  const [users, setusers] = useState<User[]>([])

  const addHandler = () => {
    if ([nome, idade, cpf].some(x => x == "")) {
      errorAlert()
    } else {
      setusers([...users, { nome, idade, cpf }])
    }
  }

  const removeHandler = () => {
    users.pop()
    setusers([...users])
  }

  const clearHandler = () => {
    setnome("")
    setidade("")
    setcpf("")
  }

  return (
    <View style={styles.container}>
      {Header([nome, setnome], [idade, setidade], [cpf, setcpf])}

      <View style={[{ justifyContent: 'space-evenly' }, styles.row]}>
        <Button color={colors.green} title="Confirmar" onPress={addHandler} />
        <Button color={'red'} title="Remover" onPress={removeHandler} />
        <Button color={colors.blue} title="Limpar" onPress={clearHandler} />
      </View>

      {usersContainer(users)}
    </View >
  )
}

type S = [string, (data: string) => void]
function Header(nome: S, idade: S, cpf: S) {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Text style={{ marginVertical: '8%', fontSize: 32, fontWeight: '800' }}>
        Cadastro de Usuários
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Nome: </Text>
          <TextInput
            style={[{ width: '75%' }, styles.input]}
            value={nome[0]}
            onChangeText={nome[1]}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Idade: </Text>
          <TextInput
            style={[{ width: '15%' }, styles.input]}
            value={idade[0]}
            onChangeText={idade[1]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>CPF: </Text>
          <TextInput
            style={[{ width: '55%' }, styles.input]}
            value={cpf[0]}
            onChangeText={cpf[1]} />
        </View>
      </View>
    </View>
  )
}

function usersContainer(users: User[]) {
  const renderUser = (u: User) => (
    <Text style={[{ borderBottomWidth: 1, marginBottom: '2%' }, styles.text]}>{`${u.nome} - ${u.cpf}`}</Text>
  )

  return (
    <View style={styles.container}>
      <Text style={{ marginVertical: '8%', fontSize: 32, fontWeight: '800' }}>
        Listagem
      </Text>

      <View style={[styles.usersContainer, styles.inputContainer]}>
        <FlatList
          data={users}
          renderItem={(u) => renderUser(u.item)} />
      </View>
    </View>
  )
}

function errorAlert() {
  Alert.alert('Alert', 'Por favor, preencha todos os campos!', [
    { text: 'OK' }
  ])
}

const colors = {
  ivory: 'rgb(255, 248, 220)',
  green: 'rgb(50, 205, 50)',
  blue: 'rgb(173, 216, 230)'
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.ivory
  },
  text: {
    fontSize: 20,
    marginRight: '1%'
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
  },
  row: {
    width: '100%',
    marginBottom: '3%',
    flexDirection: 'row'
  },
  inputContainer: {
    borderWidth: 4,
    borderColor: 'black',
    padding: '2%',
    marginBottom: '5%'
  },
  usersContainer: {
    width: '90%',
    height: '48%',
  }
})
