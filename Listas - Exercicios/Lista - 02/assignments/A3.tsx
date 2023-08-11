import { View } from 'react-native'
import colors from './colors'
import globalStyles from './styles'

export function A3a() {
    return (
        <View style={[globalStyles.container, globalStyles.row]}>
            <View style={[{ flex: 3 }, colors.green]}></View>
            <View style={[{ flex: 2 }, colors.red]}></View>
            <View style={[{ flex: 3 }, colors.blue]}></View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}

export function A3b() {
    return (
        <View>
            <View style={[globalStyles.row, globalStyles.halfHorizontal]}>
                <View style={[{ flex: 3 }, colors.green]}></View>
                <View style={[{ flex: 2 }, colors.red]}></View>
                <View style={[{ flex: 3 }, colors.blue]}></View>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={globalStyles.halfHorizontal}>
                <View style={[globalStyles.container, colors.purple]}></View>
            </View>
        </View>
    )
}

export function A3c() {
    return (
        <View>
            <View style={[globalStyles.row, globalStyles.halfHorizontal]}>
                <View style={[{ flex: 3 }, colors.green]}></View>
                <View style={[{ flex: 2 }, colors.red]}></View>
                <View style={[{ flex: 3 }, colors.blue]}></View>
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