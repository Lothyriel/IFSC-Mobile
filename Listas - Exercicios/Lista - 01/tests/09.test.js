const anagrama = (palavra, outraPalavra) => {
    if (palavra.length != outraPalavra.length) {
        return false
    }

    if (palavra.toLowerCase() == outraPalavra.toLowerCase()) {
        return false
    }

    const mapLetterCount = word => [...word].reduce((map, c) => map.set(c, 1 + (map.get(c) ?? 0)), new Map())

    const a = mapLetterCount(palavra)

    const b = mapLetterCount(outraPalavra)

    return [...a.entries()].every(e => b.get(e[0]) == e[1])
}

test('09', () => {
    expect(anagrama('amor', 'roma')).toBe(true)
    expect(anagrama('Hello', 'World')).toBe(false)
    expect(anagrama('joao', 'joao')).toBe(false)
    expect(anagrama('JOAO', 'joao')).toBe(false)
    expect(anagrama('joao', 'ojoa')).toBe(true)
    expect(anagrama('ova', 'avo')).toBe(true)
})