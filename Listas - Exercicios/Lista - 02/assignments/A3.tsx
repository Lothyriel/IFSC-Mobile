import { StyleSheet, View } from 'react-native'
import colors from './colors'

export function A3a() {
    return (
        <View style={styles.row}>
            <View style={[colors.green, { flex: 3 }]}></View>
            <View style={[colors.red, { flex: 2 }]}></View>
            <View style={[colors.blue, { flex: 3 }]}></View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}

export function A3b() {
    return (
        <View>
        </View>
    )
}

export function A3c() {
    return (
        <View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },
    halfHorizontal: {
        height: '50%'
    }
})