import { StyleSheet, View } from 'react-native'
import colors from './colors'
import globalStyles from './styles'

export function A3a() {
    return (
        <View style={[styles.container, globalStyles.row]}>
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
            <View style={[globalStyles.row, globalStyles.halfHorizontal]}>
                <View style={[colors.green, { flex: 3 }]}></View>
                <View style={[colors.red, { flex: 2 }]}></View>
                <View style={[colors.blue, { flex: 3 }]}></View>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={globalStyles.halfHorizontal}>
                <View style={[styles.container, colors.purple]}></View>
            </View>
        </View>
    )
}

export function A3c() {
    return (
        <View>
            <View style={[globalStyles.row, globalStyles.halfHorizontal]}>
                <View style={[colors.green, { flex: 3 }]}></View>
                <View style={[colors.red, { flex: 2 }]}></View>
                <View style={[colors.blue, { flex: 3 }]}></View>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={globalStyles.halfHorizontal}>
                <View style={[globalStyles.midCentered, colors.purple]}>
                    <View style={[{ height: 165, width: 165 }, colors.yellow]}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
})