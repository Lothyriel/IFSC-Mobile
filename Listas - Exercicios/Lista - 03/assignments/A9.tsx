import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch } from 'react-native';

export function A9() {
  const [toggled, setTogle] = useState(false)

  return (
    <View style={{ height: '100%', alignItems: 'center' }}>
      <Switch
        trackColor={{ true: 'black' }}
        thumbColor={toggled ? 'red' : 'white'}
        onValueChange={() => setTogle(!toggled)}
        value={toggled}
      />
      <Image style={{ width: '50%', resizeMode: 'contain' }} source={getImage(toggled)}></Image>
    </View >
  )
}

function getImage(toggled: boolean) {
  return toggled ? require('../assets/pokebola-aberta.png') : require('../assets/pokebola-fechada.png');
}

const styles = StyleSheet.create({

});
