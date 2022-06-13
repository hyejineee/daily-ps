const solution = (x)=>{
    return collatz(x, 0)
}

const collatz = (x, count)=>{
    if(count >= 500) return -1
    if(x === 1) return count
    if(x %2 ===0) return collatz(x/2, count+1)
    else return collatz(x * 3+1, count +1)
}


test(`콜라츠의 추측`, ()=>{
    expect(solution(16)).toEqual(4)
    expect(solution(626331)).toEqual(-1)
})