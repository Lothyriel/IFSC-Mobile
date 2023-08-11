import { StyleSheet, View } from 'react-native'
import colors from './colors'

export function A3a() {
    return (
        <View style={[styles.container, styles.row]}>
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
            <View style={[styles.row, styles.halfHorizontal]}>
                <View style={[colors.green, { flex: 3 }]}></View>
                <View style={[colors.red, { flex: 2 }]}></View>
                <View style={[colors.blue, { flex: 3 }]}></View>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={styles.halfHorizontal}>
                <View style={[styles.container, colors.purple]}></View>
            </View>
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
    container: {
        width: '100%',
        height: '100%'
    },
    row: {
        flexDirection: 'row',
    },
    halfHorizontal: {
        height: '50%'
    }
})