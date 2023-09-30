import { FlatList, Text, View, StyleSheet } from "react-native"
import { useNavigation, RouteProp } from "@react-navigation/native"
import { AppNavigation, AppRoutes } from "./App"

function ProfilePicture() {
  const styles = StyleSheet.create({
    background: {
      aspectRatio: 1,
      backgroundColor: 'black',
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center'
    },
    head: {
      aspectRatio: 1,
      backgroundColor: 'white',
      width: '32%',
      borderRadius: 100,
      position: 'relative',
      top: -3
    },
    body: {
      position: 'relative',
      bottom: -3,
      backgroundColor: 'white',
      width: '60%',
      height: '30%',
      borderRadius: 20,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
    }
  })

  return (
    <View style={styles.background}>
      <View style={styles.head}></View>
      <View style={styles.body}></View>
    </View>)
}

export function Contatos() {
  const navigation = useNavigation<AppNavigation>()

  const contacts = [
    ["Alexandre Perin", "(49) 991234562"],
    ["Wilson Castelo", "(48) 999674310"],
    ["Leonardo Bravo", "(48) 993474212"],
    ["Vilma Kasburg", "(48) 998487818"],
    ["Willen Leolatto", "(48) 993445566"],
    ["João Bueno", "(48) 999994848"],
    ["Fábio Aiub", "(48) 997183211"],
    ["Eduardo Fogaça", "(48) 99547364"]
  ]

  const render = (c: string[]) => {
    const navigateInfo = () => { navigation.navigate('Informações', { nome: c[0], telefone: c[1] }) }

    return (
      <View style={styles.row} onTouchEnd={navigateInfo}>
        <View style={{ marginRight: '5%', width: '15%', }}>
          <ProfilePicture />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={[{ fontWeight: '600' }, styles.text]}>{c[0]}</Text>
          <Text style={styles.text}>{c[1]}</Text>
        </View>
      </View>
    )
  }

  return (
    <FlatList
      data={contacts}
      renderItem={(u) => render(u.item)} />
  )
}

type InfoProps = { route: RouteProp<AppRoutes, 'Informações'> }

export function Info(props: InfoProps) {
  const { nome, telefone } = props.route.params

  return (
    <View style={{ marginTop: '15%', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '38%', marginBottom: '3%' }}>
        <ProfilePicture />
      </View>
      <Text style={{ fontSize: 32, fontWeight: '700', marginBottom: '2%' }}>{nome}</Text>
      <Text style={{ fontSize: 20 }}>{telefone}</Text>
    </View>
  )
}

export function Sobre() {
  return (
    <View style={styles.about} >
      <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '400' }}>
        Este aplicativo foi desenvolvido a fim de ensinar os alunos de Desenvolvimento Móvel,
        do IFSC Campus Lages, a utilizarem o Drawer Navigator em seus aplicativos.
      </Text>
    </View >
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: '3%',
    paddingLeft: '3%'
  },
  about: {
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%'
  }
})
