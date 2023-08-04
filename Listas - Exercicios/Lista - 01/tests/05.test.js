const formatarSegundos = (segundos) => {
    const dHoras = segundos / (60 * 60)

    const dMinutos = (segundos % (60 * 60)) / 60

    const dSegundos = (segundos % 60)

    const format = (number) => parseInt(number).toString().padStart(2, '0')

    return `${format(dHoras)}:${format(dMinutos)}:${format(dSegundos)}`
}

test('05', () => {
    expect(formatarSegundos(10000)).toBe('02:46:40')
    expect(formatarSegundos(60)).toBe('00:01:00')
    expect(formatarSegundos(100)).toBe('00:01:40')
    expect(formatarSegundos(600)).toBe('00:10:00')
    expect(formatarSegundos(2730)).toBe('00:45:30')
    expect(formatarSegundos(1)).toBe('00:00:01')
    expect(formatarSegundos(86399)).toBe('23:59:59')
    expect(formatarSegundos(1000000)).toBe('277:46:40')
})