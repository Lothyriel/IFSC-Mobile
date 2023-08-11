import { StyleSheet, View } from 'react-native'
import colors from './colors'

export function A2a() {
    return (
        <View>
            <View style={[styles.halfVertical, colors.red]} />
            <View style={[styles.halfVertical, colors.blue]} />
        </View>
    )
}

export function A2b() {
    return (
        <View>
            <View style={styles.row}>
                <View style={[styles.halfHorizontal, colors.red]} />
            </View>
            <View style={[styles.row, styles.alignRight]}>
                <View style={[styles.halfHorizontal, colors.blue]} />
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
    halfVertical: {
        height: '50%'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        height: '50%'
    },
    halfHorizontal: {
        width: '50%'
    },
    bottom: {
        alignContent: 'flex-end'
    },
    alignRight: {
        justifyContent: 'flex-end'
    }
})