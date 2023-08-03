const idadeDias = (dia, mes, ano) => {
    const today = new Date()
    const tDia = today.getDate()
    const tMes = today.getMonth() + 1   //começa em 0 kkkkkkkkkk
    const tAno = today.getFullYear()

    const anos = tAno - ano
    const meses = tMes - mes
    const dias = tDia - dia

    const dAnos = anos * 365
    const dMeses = meses * 30

    return dAnos + dMeses + dias
}

test('04', () => {
    expect(idadeDias(27, 4, 2001)).toBe(8126)
});