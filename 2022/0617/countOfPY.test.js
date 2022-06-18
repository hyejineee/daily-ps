const solution = (s) => {
    const result = s.toLowerCase().split('').reduce((acc, cur) => {
        if (cur === 'p') acc[0]++
        if (cur === 'y') acc[1]++
        return acc
    }, [0, 0])

    return result[0] === result[1]
}

test(`문자열 내 p와 y의 개수`, () => {
    expect(solution("pPoooyY")).toEqual(true)
    expect(solution("Pyy")).toEqual(false)
})