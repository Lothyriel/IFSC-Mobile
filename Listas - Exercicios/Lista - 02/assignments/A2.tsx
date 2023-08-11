import { StyleSheet, View } from 'react-native'
import colors from './colors'

export function A2a() {
    return (
        <View>
            <View style={[styles.halfHorizontal, colors.red]} />
            <View style={[styles.halfHorizontal, colors.blue]} />
        </View>
    )
}

export function A2b() {
    return (
        <View>
            <View style={styles.row}>
                <View style={[styles.halfVertical, colors.red]} />
            </View>
            <View style={[styles.row, styles.alignRight]}>
                <View style={[styles.halfVertical, colors.blue]} />
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
        width: '50%'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        height: '50%'
    },
    halfHorizontal: {
        height: '50%'
    },
    thin: {
        height: 30
    },
    alignRight: {
        justifyContent: 'flex-end'
    },
    alignBottom: {
        alignItems: 'flex-end'
    }
})