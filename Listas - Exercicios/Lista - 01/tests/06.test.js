const piramideInvertida = (numero) => {
    if (numero % 2 == 0) {
        return null
    }

    const qtdLinhas = Math.ceil(numero / 2)

    return [...Array(qtdLinhas).keys()].map(padding => {
        const paddingStr = ' '.repeat(padding * 2)

        const numeros = [...Array(numero - padding * 2).keys()].map(numero => 1 + numero + padding).join(' ')

        return `${paddingStr}${numeros}`
    }).join('\n')
}

test('06', () => {
    expect(piramideInvertida(0)).toBe(null)
    expect(piramideInvertida(2)).toBe(null)
    expect(piramideInvertida(4)).toBe(null)
    expect(piramideInvertida(1)).toBe('1')
    expect(piramideInvertida(5)).toBe('1 2 3 4 5\n  2 3 4\n    3')
    expect(piramideInvertida(9)).toBe('1 2 3 4 5 6 7 8 9\n  2 3 4 5 6 7 8\n    3 4 5 6 7\n      4 5 6\n        5')
});