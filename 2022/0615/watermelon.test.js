const solution = (n) => {
    return n % 2 === 0 ? "수박".repeat(n / 2) : "수박".repeat(n / 2) + "수"
}


test(`수박수박수`, () => {
    expect(solution(3)).toEqual("수박수")
    expect(solution(4)).toEqual("수박수박")
})