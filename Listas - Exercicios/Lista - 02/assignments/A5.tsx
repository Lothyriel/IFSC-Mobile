import { View, StyleSheet } from 'react-native'
import colors from './colors'
import globalStyles from './styles'

export function A5() {
    return (
        <View style={globalStyles.container}>
            <View style={[{ flex: 1 }, colors.grey]}></View>
            <View style={[{ flex: 3 }, globalStyles.midCentered]}>
                <View style={[styles.circle, styles.border, colors.darkBlue]}></View>
            </View>
            <View style={[{ flex: 5 }, colors.lightRed]}></View>
            <View style={[{ flex: 2 }, globalStyles.midSpaced, globalStyles.row]}>
                {roundButton(colors.orange)}
                {roundButton(colors.purple)}
                {roundButton(colors.green)}
            </View>
        </View>
    )
}

type Color = { backgroundColor: string }
function roundButton(color: Color) {
    return <View style={[{ height: 65, width: 100 }, styles.border, globalStyles.rounded, color]}></View>
}

const styles = StyleSheet.create({
    border: {
        borderWidth: 4,
        borderColor: 'black'
    },
    circle: {
        borderRadius: 100,
        height: 145,
        width: 145
    }
})