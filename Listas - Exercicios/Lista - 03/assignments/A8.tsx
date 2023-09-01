import React, { useState } from 'react'
import { View, Image, Button, Text } from 'react-native'
import colors from './colors'

export function A8() {
  const [selectedText, setText] = useState('Escolha o seu pokemon!')
  const [image, setImage] = useState(require('../assets/pokebola.png'))
  const handler = (name: string, image: any) => {
    setImage(image)
    setText(name)
  }

  return (
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 32, fontWeight: '600' }}>{selectedText}</Text>
      <Image style={{ height: '35%', width: '60%', resizeMode: 'contain' }} source={image}></Image>
      <View style={{ flexDirection: 'row' }}>
        <Button
          title={'BULBASAURO'}
          color={colors.green}
          onPress={() => handler('Bulbasauro', require('../assets/bulbasauro.png'))}
        />
        <Button
          title={'SQUIRTLE'}
          color={colors.blue}
          onPress={() => handler('Squirtle', require('../assets/squirtle.png'))}
        />
        <Button
          title={'CHARMANDER'}
          color={colors.red}
          onPress={() => handler('Charmander', require('../assets/charmander.png'))}
        />
      </View>
    </View >
  )
}
