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
            <View style={[{ flex: 5 }, colors.red]}></View>
            <View style={[{ flex: 2 }, globalStyles.midSpaced, globalStyles.row]}>
                {RoundButton(colors.orange)}
                {RoundButton(colors.purple)}
                {RoundButton(colors.green)}
            </View>
        </View>
    )
}

type Color = { backgroundColor: string }
function RoundButton(color: Color) {
    return <View style={[styles.border, styles.roundedButton, color]}></View>
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
    },
    roundedButton: {
        borderRadius: 25,
        height: 65,
        width: 100
    }
})