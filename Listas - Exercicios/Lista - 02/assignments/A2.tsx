import { StyleSheet, View } from 'react-native'
import colors from './colors'
import globalStyles from './styles'

export function A2a() {
    return (
        <View>
            <View style={[globalStyles.halfHorizontal, colors.lightRed]} />
            <View style={[globalStyles.halfHorizontal, colors.blue]} />
        </View>
    )
}

export function A2b() {
    return (
        <View>
            <View style={styles.row}>
                <View style={[globalStyles.halfVertical, colors.lightRed]} />
            </View>
            <View style={[styles.row, globalStyles.alignRight]}>
                <View style={[globalStyles.halfVertical, colors.blue]} />
            </View>
        </View>
    )
}

export function A2c() {
    return (
        <View>
            <View style={[styles.row, globalStyles.alignBottom]}>
                <View style={[globalStyles.halfVertical, styles.thin, colors.lightRed]} />
            </View>
            <View style={[styles.row, globalStyles.alignRight]}>
                <View style={[globalStyles.halfVertical, styles.thin, colors.blue]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: '100%',
        height: '50%'
    },
    thin: {
        height: 30
    }
})