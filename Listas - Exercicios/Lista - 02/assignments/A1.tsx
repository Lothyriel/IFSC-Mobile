import { StyleSheet, View } from 'react-native'
import colors from './colors'
import globalStyles from './styles'

export function A1a() {
    return (
        <View style={globalStyles.midCentered}>
            <View style={[styles.square, colors.orange]} />
        </View>
    )
}

export function A1b() {
    return (
        <View style={globalStyles.midCentered}>
            <View style={[styles.square, colors.orange]} />
            <View style={[styles.square, colors.purple]} />
            <View style={[styles.square, colors.green]} />
        </View>
    )
}

export function A1c() {
    return (
        <View style={[globalStyles.midCentered, globalStyles.row]}>
            <View style={[styles.square, colors.orange]} />
            <View style={[styles.square, colors.purple]} />
            <View style={[styles.square, colors.green]} />
        </View>
    )
}

const styles = StyleSheet.create({
    square: {
        height: 100,
        width: 100
    }
})