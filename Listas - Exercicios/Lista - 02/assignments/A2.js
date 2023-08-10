import { StyleSheet, View } from 'react-native'
import colors from './colors';

export function A2a() {
    return (
        <View>
            <View style={[styles.square, colors.red]} />
            <View style={[styles.square, colors.blue]} />
        </View>
    )
}

export function A2b() {
    return (
        <View>
        </View>
    )
}

export function A2c() {
    return (
        <View>
        </View>
    )
}

const styles = StyleSheet.create({
    square: {
        height: '50%',
    }
});