const cifraCesar = (texto, deslocamento) => {
    return [...texto].map(c => c.charCodeAt(0) + deslocamento % 26).map(c => String.fromCharCode(/*Math.min(*/c/*, 122*/)).join('')
}

test('08', () => {
    expect(cifraCesar('joao', 26)).toBe('joao')
    expect(cifraCesar('joao', 13)).toBe('wbnb')
    expect(cifraCesar('joao', 1)).toBe('kpbp')
    expect(cifraCesar('marx', 1)).toBe('nbsy')
});