function verificaExcesso(pesoPeixes) {
    return pesoPeixes > 50 ? (pesoPeixes - 50) * 4 : 0
}

test('01', () => {
    expect(verificaExcesso(60)).toBe(40)
    expect(verificaExcesso(40)).toBe(0)
})