const solution = (n)=>{
    let sum = 0
    for(let i =1; i<=Math.sqrt(n); i++){
        if(n % i ===0) {
            sum += i
            if(n/i !=i) sum += parseInt(n/i)
        }
    }
    return sum
}


test(`약수의 합`, ()=>{
    expect(solution(12)).toEqual(28)
    expect(solution(5)).toEqual(6)
})