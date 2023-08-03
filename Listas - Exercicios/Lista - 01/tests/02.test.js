function conversorTemperatura(temp, entrada, saida) {
    const toKelvin = {
        'C': (t) => t + 273.15,
        'F': (t) => (t - 32) * 1.8 + 273.15,
        'K': (t) => t
    }

    const fromKelvin = {
        'C': (t) => t - 273.15,
        'F': (t) => (t - 273.15) * 1.8 + 32,
        'K': (t) => t
    }

    const conversorToKelvin = toKelvin[entrada]

    if (!conversorToKelvin) {
        return -1
    }

    const kelvin = conversorToKelvin(temp)

    const fromKelvinConversor = fromKelvin[saida]

    if (!fromKelvinConversor) {
        return -1
    }

    return fromKelvinConversor(kelvin)
}

test('02', () => {
    expect(conversorTemperatura(100, 'C', 'C')).toBeCloseTo(100)
    expect(conversorTemperatura(100, 'C', 'C')).toBeCloseTo(100)
    expect(conversorTemperatura(100, 'C', 'K')).toBeCloseTo(373.15)
    expect(conversorTemperatura(300, 'K', 'C')).toBeCloseTo(26.85)
    expect(conversorTemperatura(100, 'C', 'F')).toBeCloseTo(212)
    expect(conversorTemperatura(300, 'K', 'F')).toBeCloseTo(80.33)
    expect(conversorTemperatura(25, 'C', 'F')).toBeCloseTo(77)
    expect(conversorTemperatura(50, 'R', 'K')).toBeCloseTo(-1)
});