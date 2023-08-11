import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    midCentered: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    row: {
        flexDirection: 'row'
    },
    halfVertical: {
        width: '50%'
    },
    halfHorizontal: {
        height: '50%'
    },
    alignRight: {
        justifyContent: 'flex-end'
    },
    alignBottom: {
        alignItems: 'flex-end'
    },
    square: {
        height: 100,
        width: 100
    },
    spaceBetween: {
        justifyContent: 'space-between'
    }
})

export default globalStyles