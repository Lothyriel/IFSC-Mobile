import { View } from 'react-native'
import colors from './colors'
import globalStyles from './styles'

export function A1a() {
    return (
        <View style={globalStyles.midCentered}>
            <View style={[globalStyles.square, colors.orange]} />
        </View>
    )
}

export function A1b() {
    return (
        <View style={globalStyles.midCentered}>
            <View style={[globalStyles.square, colors.orange]} />
            <View style={[globalStyles.square, colors.purple]} />
            <View style={[globalStyles.square, colors.green]} />
        </View>
    )
}

export function A1c() {
    return (
        <View style={[globalStyles.midCentered, globalStyles.row]}>
            <View style={[globalStyles.square, colors.orange]} />
            <View style={[globalStyles.square, colors.purple]} />
            <View style={[globalStyles.square, colors.green]} />
        </View>
    )
}