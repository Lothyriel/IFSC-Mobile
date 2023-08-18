import colors from './colors'
import { View, Text, StyleSheet } from 'react-native'

export function A3() {
  return (
    <View style={{ height: '100%' }}>
      <Text style={[{ flex: 3 }, styles.green]}>
        Esse é mais um exemplo de texto.
      </Text>
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <Text style={styles.black}>
          Porém aqui vamos combinar style e flexbox para dividir o texto em duas colunas.
          Essa é a primeira coluna! Aqui vai um exemplo de texto qualquer.
        </Text>
        <Text style={styles.yellow}>
          Esse é outro exemplo de texto para popular a segunda coluna,
          porém sem criatividade para escrever mais! :D
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  green: {
    fontSize: 23,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    backgroundColor: colors.green,
  },
  black: {
    flex: 1,
    fontSize: 21,
    backgroundColor: colors.black,
    color: colors.white
  },
  yellow: {
    flex: 1,
    fontSize: 26,
    backgroundColor: colors.yellow,
    color: colors.blue,
    textAlign: 'left'
  }
})