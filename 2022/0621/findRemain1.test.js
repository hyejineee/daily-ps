const solution = (n) => {
    let i = 1
    while(i <n){
        if(n %i ===1) return i 
        i++
    }
}

test(`나머지가 1이 되는 수 찾기`, () => {
    expect(solution(10)).toEqual(3)
    expect(solution(12)).toEqual(11)
})
