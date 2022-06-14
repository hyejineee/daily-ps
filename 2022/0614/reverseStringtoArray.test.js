const solution = (n)=>{
    return Array.prototype.map.call(String(n), (v) => parseInt(v)).reverse()
}

test(`자연수 뒤집어 배열로 만들기`, ()=>{
    expect(solution(12345)).toEqual([5,4,3,2,1])
})