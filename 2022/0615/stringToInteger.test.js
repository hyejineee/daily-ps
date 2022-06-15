const solution = (s) => {
    return +s
}


test(`문자열을 정수로`, () => {
    expect(solution("1234")).toEqual(1234)
    expect(solution("-1234")).toEqual(-1234)
})