const solution = (s) => {
    return s.length % 2 !== 0 ? s[parseInt(s.length / 2)] : s[parseInt(s.length / 2) - 1] + s[parseInt(s.length / 2)]
}

test(`가운데 글자 가져오기`, () => {
    expect(solution("abcde")).toEqual("c")
    expect(solution("qwer")).toEqual("we")
})