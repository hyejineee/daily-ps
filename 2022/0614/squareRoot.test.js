const solution = (n)=>{
    const sq = Math.sqrt(n)
    const s = sq - Math.floor(sq)
    return s == 0 ? (sq+1) * (sq+1) : -1 
}

test(`정수 제곱근 구하기`, ()=>{
    expect(solution(121)).toEqual(144)
    expect(solution(3)).toEqual(-1)
})