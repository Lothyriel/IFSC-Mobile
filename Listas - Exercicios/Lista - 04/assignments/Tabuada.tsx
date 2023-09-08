import { useState } from 'react'
import { View, Text, Button } from 'react-native'

export function A1() {
  return (
    <View style={{ height: '100%', alignItems: 'center' }}>
      {tabuada(7)}
    </View>
  )
}

export function A2() {
  const [number, setNumber] = useState<number | null>(null)

  const createButton = (n: number) => (
    <Button key={n} color={'black'} title={`${n + 1}`} onPress={() => setNumber(n + 1)} />
  )

  return (
    <View style={{ height: '100%', alignItems: 'center' }}>
      {tabuada(number)}
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
        {[...Array(10).keys()].map(createButton)}
      </View>
    </View>
  )
}

function tabuada(number: number | null) {
  const numberLine = (n: number) => (
    <Text key={n} style={{ fontSize: 32, fontWeight: '400' }}>{n} x {number} = {n * number!}</Text>
  )

  return (
    <View>
      <Text style={{ fontSize: 32, fontWeight: '700', marginVertical: '8%' }}>Tabuada do {number ?? 'X'}</Text>
      <View style={{ marginHorizontal: '8%', marginBottom: '5%' }}>
        {number && [...Array(11).keys()].map(numberLine)}
      </View>
    </View>
  )
}
