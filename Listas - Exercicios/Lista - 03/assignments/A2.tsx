import colors from './colors'
import { View, Text, StyleSheet } from 'react-native'

export function A2() {
  return (
    <View style={{ height: '100%', justifyContent: 'center' }}>
      <View>
        {green("Este é outro exemplo de texto!")}
        {blue()}
        {yellow()}
        {green("Com alinhamento centralizado.")}
        {red()}
      </View>
    </View>
  )
}

function green(text: string) {
  return <Text style={styles.green}>{text}</Text>
}

function blue() {
  return <Text style={styles.blue}>Com alinhamentos à esquerda.</Text>
}

function yellow() {
  return <Text style={styles.yellow}>Com alinhamentos à direita</Text>
}

function red() {
  return <Text style={styles.red}>E cor de fundo!</Text>
}

const styles = StyleSheet.create({
  green: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.blue,
    backgroundColor: colors.green
  },
  blue: {
    fontSize: 20,
    backgroundColor: colors.blue,
    color: colors.white
  },
  yellow: {
    color: colors.red,
    fontSize: 18,
    backgroundColor: colors.yellow,
    textAlign: 'right'
  },
  red: {
    fontSize: 15,
    backgroundColor: colors.lightRed,
  },
})