import { StyleSheet, View } from 'react-native'
import colors from './colors'

export function A1a() {
    return (
        <View style={styles.centered}>
            <View style={[styles.square, colors.orange]} />
        </View>
    )
}

export function A1b() {
    return (
        <View style={styles.centered}>
            <View style={[styles.square, colors.orange]} />
            <View style={[styles.square, colors.purple]} />
            <View style={[styles.square, colors.green]} />
        </View>
    )
}

export function A1c() {
    return (
        <View style={[styles.centered, styles.row]}>
            <View style={[styles.square, colors.orange]} />
            <View style={[styles.square, colors.purple]} />
            <View style={[styles.square, colors.green]} />
        </View>
    )
}

const styles = StyleSheet.create({
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    row: {
        flexDirection: 'row',
    },
    square: {
        height: 100,
        width: 100
    }
});