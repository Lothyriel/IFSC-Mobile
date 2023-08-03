function conversorTemperatura(entrada, saida, temp) {
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
    expect(conversorTemperatura('C', 'C', 100)).toBeCloseTo(100)
    expect(conversorTemperatura('C', 'K', 100)).toBeCloseTo(373.15)
    expect(conversorTemperatura('K', 'C', 300)).toBeCloseTo(26.85)
    expect(conversorTemperatura('C', 'F', 100)).toBeCloseTo(212)
    expect(conversorTemperatura('K', 'F', 300)).toBeCloseTo(80.33)
});