import { StyleSheet, View } from 'react-native'
import colors from './colors'

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
        <View style={styles.column}>
            <View style={styles.row}>
                <View style={[styles.square, colors.red]} />
            </View>
            <View style={[styles.row, styles.alignRight]}>
                <View style={[styles.square, colors.blue]} />
            </View>
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
    column: {
        width: '100%',
        height: '100%'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        height: '50%'
    },
    square: {
        width: '50%'
    },
    bottom: {
        alignContent: 'flex-end'
    },
    alignRight: {
        justifyContent: 'flex-end'
    }
})