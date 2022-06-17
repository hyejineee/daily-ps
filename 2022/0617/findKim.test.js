const solution = (seoul) => {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}

test(`서울에서 김서방 찾기`, () => {
    expect(solution(["Jane", "Kim"])).toEqual("김서방은 1에 있다")
})