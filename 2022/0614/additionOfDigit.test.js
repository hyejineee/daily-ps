const solution = (n)=>{
    return addition(n)
}

const addition = (n) =>{
    if(n ==0) return 0
    if(n <= 1) return 1
    else return addition(parseInt(n/10)) + parseInt(n%10)
}

test(`자릿수 더하기`, ()=>{
    expect(solution(123)).toEqual(6)
    expect(solution(987)).toEqual(24)
})