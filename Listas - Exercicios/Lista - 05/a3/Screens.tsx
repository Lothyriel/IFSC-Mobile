import { FlatList, Text, View, StyleSheet } from "react-native"

export function Contatos() {
  const contacts = [
    ["Alexandre Perin", "(49) 991234562"],
    ["Wilson Castelo", "(48) 999674310"],
    ["Leonardo Bravo", "(48) 993474212"],
    ["Vilma Kasburg", "(48) 998487818"],
    ["Willen Leolatto", "(48) 993445566"],
    ["João Bueno", "(48) 999994848"],
    ["Fábio Aiub", "(48) 997183211"],
    ["Eduardo Fogaça", "(48) 99547364"],
  ]

  const render = (c: string[]) => (
    <View style={styles.row}>
      <Text style={styles.text}>{c[0]}</Text>
      <Text style={styles.text}>{c[1]}</Text>
    </View>
  )

  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={(u) => render(u.item)} />
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
    marginBottom: '2%',
    fontSize: 25
  },
  row: {
    borderBottomWidth: 1,
  },
  about: {
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%'
  }
})
