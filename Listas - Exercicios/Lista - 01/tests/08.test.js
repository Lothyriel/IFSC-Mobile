const cifraCesar = (texto, deslocamento) => {
    return [...texto]
        .map(c => c.charCodeAt(0) + deslocamento % 26)
        .map(c => c > 'z'.charCodeAt(0) ? c - 26 : c)
        .map(c => String.fromCharCode(c))
        .join('')
}

test('08', () => {
    expect(cifraCesar('joao', 26)).toBe('joao')
    expect(cifraCesar('joao', 13)).toBe('wbnb')
    expect(cifraCesar('joao', 1)).toBe('kpbp')
    expect(cifraCesar('marx', 1)).toBe('nbsy')
    expect(cifraCesar('zzzz', 1)).toBe('aaaa')
    expect(cifraCesar('aaaa', 1)).toBe('bbbb')
});