const solution = (s, n) => {
    return s.split('').map((v, i) => {
        if (v === ' ') return ' '

        const temp = s.charCodeAt(i) + n
        return (v == v.toUpperCase())
            ? (temp > 90 ? String.fromCharCode(65 + (temp % 65 - 26)) : String.fromCharCode(temp))
            : (temp > 122 ? String.fromCharCode(97 + (temp % 97 - 26)) : String.fromCharCode(temp))

    }).join('')
}

test(`시저암호`, () => {
    expect(solution("AB", 1)).toEqual("BC")
    expect(solution("z", 1)).toEqual("a")
    expect(solution("a B z", 4)).toEqual("e F d")
})