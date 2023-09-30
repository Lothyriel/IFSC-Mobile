import { Button, View, StyleSheet, Text, Image } from "react-native"
import { Navigation } from "./App"
import { useNavigation } from '@react-navigation/native'
import { useState } from "react"

export function Inicio() {
  const navigation = useNavigation<Navigation>()

  const [seguindo, setSeguindo] = useState(false)

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ width: '20%', marginTop: '35%' }}>
        <IfscLogo />
      </View>
      <View>
        <Text style={[styles.textCenter, styles.title]}>INSTITUTO</Text>
        <Text style={[styles.textCenter, styles.title]}>FEDERAL</Text>
        <Text style={[styles.textCenter, { fontSize: 20, borderColor: colors.lightGreen, borderBottomWidth: 1.5 }]}>
          Santa Catarina
        </Text>
        <Text style={[styles.textCenter, { fontSize: 20 }]}>Câmpus</Text>
        <Text style={[styles.textCenter, { fontSize: 20 }]}>Lages</Text>
      </View>
      <View style={{ marginTop: '5%' }}>
        <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: "600" }}>
          Bem-vindo a rede social do IFSC.
        </Text>
        <Text style={styles.textCenter}>Para ver seu perfil, clique no botão abaixo.</Text>
      </View>

      <View style={{ width: '25%', marginTop: '5%' }}>
        <Button title="Ver Perfil" color={colors.green} onPress={() => navigation.navigate('Perfil')} />
      </View>
    </View >
  )
}

function IfscLogo() {
  const styles = StyleSheet.create({
    piece: {
      width: '30%',
      aspectRatio: 1,
      marginRight: '5%'
    },
    ball: {
      backgroundColor: colors.red,
      borderRadius: 100
    },
    block: {
      backgroundColor: colors.lightGreen,
      borderRadius: 3
    },
    row: {
      flexDirection: 'row',
      marginBottom: '3%'
    }
  })

  return (
    <View style={{ width: '100%' }}>
      <View style={styles.row}>
        <View style={[styles.piece, styles.ball]}></View>
        <View style={[styles.piece, styles.block]}></View>
        <View style={[styles.piece, styles.block]}></View>
      </View>
      <View style={styles.row}>
        <View style={[styles.piece, styles.block]}></View>
        <View style={[styles.piece, styles.block]}></View>
      </View>
      <View style={styles.row}>
        <View style={[styles.piece, styles.block]}></View>
        <View style={[styles.piece, styles.block]}></View>
        <View style={[styles.piece, styles.block]}></View>
      </View>
      <View style={styles.row}>
        <View style={[styles.piece, styles.block]}></View>
        <View style={[styles.piece, styles.block]}></View>
      </View>
    </View>
  )
}

export function Perfil() {
  return (
    <View style={{ padding: '3%' }}>
      <View style={{ borderWidth: 1.5, padding: '3%', height: '100%' }}>
        <View style={{ height: '30%' }}>
          {follow()}
        </View>
      </View>
    </View >
  )

  function follow() {
    return (
      <View style={{ flexDirection: 'row', height: '100%' }}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/56160019?v=4' }}
          style={{ flex: 2 }} />
        <View style={{ flex: 3, paddingHorizontal: '3%', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontWeight: '800', fontSize: 18 }}>João Vitor Xavier</Text>
            <Text>Desenvolvedor Fullstack</Text>
            <Text>.NET | Angular | Devops </Text>
            <Text>Natural de Lages - SC</Text>
            <Text>Ciência da Computação - 2024</Text>
          </View>
          <Button
            title={seguindo ? "Deixar de Seguir" : "Seguir"}
            color={colors.green}
            onPress={() => setSeguindo(!seguindo)} />
        </View>
      </View>
    )
  }
}

const colors = {
  green: 'rgb(0, 128, 0)',
  lightGreen: 'rgb(50, 160, 65)',
  red: 'rgb(200, 25, 30)'
}

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center'
  },
  title: {
    fontWeight: '600',
    fontSize: 30
  }
})
