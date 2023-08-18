import colors from './colors'
import { View, Text, StyleSheet } from 'react-native'

export function A1() {
  return (
    <View style={{ height: '100%', justifyContent: 'center' }}>
      <Text style={styles.azulao}>Esse é o {azulao()}!</Text>
      <Text style={styles.vermelhinho}>Esse é o {vermelhinho()}!</Text>
      <Text>Esse mistura os dois!! {azulao()} e {vermelhinho()}!!!</Text>
    </View>
  )
}

function azulao() {
  return <Text style={styles.azulao}>AZULÃO</Text>
}

function vermelhinho() {
  return <Text style={styles.vermelhinho}>vermelhinho</Text>
}

const styles = StyleSheet.create({
  azulao: { fontSize: 30, fontWeight: '600', color: colors.blue },
  vermelhinho: { fontSize: 18, color: colors.red }
})