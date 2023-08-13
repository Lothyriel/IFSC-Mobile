import { View, StyleSheet } from 'react-native'
import colors from './colors'
import globalStyles from './styles'

export function A6() {
    return (
        <View style={globalStyles.container}>
            {searchContainer()}
            <View style={[{ flex: 10 }, colors.lightPink]}></View>
            <View style={[{ flex: 10 }, colors.cream]}></View>
            <View style={{ flex: 1 }}></View>
            {suggestionsContainer()}
            {footer()}
        </View>
    )
}

function searchContainer() {
    const optionButton = () => (
        <View style={[{ width: '32%', height: '40%' }, colors.pink]}>
            <View style={[{ width: '35%', height: '100%' }, colors.black]}></View>
        </View>
    )

    return (
        <View style={[{ flex: 25 }, globalStyles.midSpaced]}>
            <View style={[{ flex: 1 }, globalStyles.row, globalStyles.midSpaced]}>
                {optionButton()}
                <View style={{ width: '3%' }}></View>
                {optionButton()}
            </View>
            <View style={[{ flex: 1, justifyContent: 'center' }, globalStyles.row]}>
                <View style={[{ width: '85%', height: '75%' }, colors.darkPink, globalStyles.rounded]}></View>
            </View>
        </View>
    )
}

function suggestionsContainer() {
    const optionButton = () => (
        <View>
            <View style={[{ marginTop: 25, width: 85, height: 85 }, colors.lightCream, globalStyles.rounded]}></View>
            <View style={[{ width: 85, height: 15, marginTop: 15 }, colors.red]}></View>
        </View>
    )

    return (
        <View style={[{ flex: 40 }, colors.lightGrey]}>
            <View style={[{ marginTop: 25, justifyContent: 'center' }, globalStyles.row]}>
                <View style={[{ width: '30%', height: 30 }, colors.darkCream]}></View>
                <View style={{ width: '32%' }}></View>
                <View style={[{ width: '30%', height: 30 }, colors.darkCream]}></View>
            </View>
            <View style={[{ justifyContent: 'space-evenly' }, globalStyles.row]}>
                {optionButton()}
                {optionButton()}
                {optionButton()}
                {optionButton()}
            </View>
        </View>
    )
}

function footer() {
    const button = () => (
        <View style={[{ height: 80, width: 80 }, colors.lightBlue]}></View>
    )

    return (
        <View style={[{ flex: 14 }, globalStyles.midSpaced, colors.darkBlue, globalStyles.row]}>
            {button()}
            {button()}
            {button()}
            {button()}
        </View>
    )
}