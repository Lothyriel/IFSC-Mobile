import { View } from 'react-native'
import colors from './colors'
import globalStyles from './styles'

export function A4a() {
    return (
        <View style={[globalStyles.spacedBetween, globalStyles.container]}>
            <View style={[globalStyles.row, globalStyles.alignRight]}>
                <View style={[globalStyles.square, colors.darkBlue]} />
                <View style={[globalStyles.square, colors.red]} />
            </View>
            <View>
                <View style={[globalStyles.square, colors.red]} />
                <View style={[globalStyles.square, colors.darkBlue]} />
            </View>
        </View>
    )
}

export function A4b() {
    return (
        <View style={[globalStyles.spacedBetween, globalStyles.container]}>
            <View style={[globalStyles.row, globalStyles.spacedBetween]}>
                <View style={[globalStyles.square, colors.darkBlue]} />
                <View style={[globalStyles.square, colors.red]} />
            </View>
            <View style={[globalStyles.row]}>
                <View>
                    <View style={[globalStyles.square, colors.red]} />
                    <View style={globalStyles.square} />
                    <View style={[globalStyles.square, colors.darkBlue]} />
                </View>
            </View>
        </View >
    )
}

export function A4c() {
    return (
        <View>
            <View style={[globalStyles.spacedBetween, globalStyles.halfHorizontal]}>
                <View style={[globalStyles.row, globalStyles.alignRight]}>
                    <View style={[globalStyles.square, colors.red]} />
                </View>
                <View style={[globalStyles.square, colors.darkBlue]} />
            </View>
            <View style={[globalStyles.spacedBetween, globalStyles.halfHorizontal]}>
                <View style={[globalStyles.square, colors.red]} />
                <View style={[globalStyles.row, globalStyles.alignRight]}>
                    <View style={[globalStyles.square, colors.darkBlue]} />
                </View>
            </View>
        </View >
    )
}