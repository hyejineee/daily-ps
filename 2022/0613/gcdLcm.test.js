const solution = (n1,n2)=>{
    const g = gcd(n1,n2)
    return [g, n1 * n2 /g]
}

const gcd = (n1, n2)=>{
    if(n2 == 0) return n1
    else return gcd(n2, n1%n2)
}


test(`최대 공약수, 최소 공배수 구하기`, ()=>{
    expect(solution(3,12)).toEqual([3,12])
    expect(solution(2,5)).toEqual([1,10])
})
