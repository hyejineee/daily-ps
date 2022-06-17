const solution = (s) => {
    return s.split('').sort().reverse().join('')
}

test(`문자열 내림차순 정렬`, () => {
    expect(solution("Zbcdefg")).toEqual("gfedcbZ")
})