const ALTURA_CHICO = 1.50
const ALTURA_ZE = 1.10
const CRESCIMENTO_CHICO = 0.02
const CRESCIMENTO_ZE = 0.03

const zeMaior = function () { 1 + ((ALTURA_CHICO - ALTURA_ZE) / (CRESCIMENTO_ZE - CRESCIMENTO_CHICO)) }

test('03', () => {
    expect(zeMaior()).toBe(41)
});