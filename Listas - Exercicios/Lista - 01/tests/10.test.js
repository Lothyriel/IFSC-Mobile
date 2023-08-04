const specialCharacters = new Set([
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '+',
    '=',
    '{',
    '}',
    '[',
    ']',
    '|',
    `\\`,
    '/',
    ':',
    ';',
    '"',
    `'`,
    '<',
    '>',
    ',',
    '.',
    '?'
])

const verificaSenha = (senha) => {
    if (senha.length < 8) {
        return false
    }

    const it = [...senha]

    if (it.every(c => isNaN(c))) {
        return false
    }

    if (it.every(c => !specialCharacters.has(c))) {
        return false
    }

    if (it.every(c => c == c.toUpperCase())) {
        return false
    }

    if (it.every(c => c == c.toLowerCase())) {
        return false
    }

    return true
}

test('10', () => {
    expect(verificaSenha('')).toBe(false)
    expect(verificaSenha('joao')).toBe(false)
    expect(verificaSenha('joaoMitinho')).toBe(false)
    expect(verificaSenha('joaoMitinho17')).toBe(false)
    expect(verificaSenha('joaoMitinho17\\')).toBe(true)
    expect(verificaSenha('#senhaSecreta27')).toBe(true)
})