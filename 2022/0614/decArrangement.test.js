const solution = (n)=>{
    return parseInt(Array.prototype.map.call(String(n), (v)=> parseInt(v)).sort((a,b)=> b-a).join(''))
}

test(`정수 내림차순으로 배치하기`, ()=>{
    expect(solution(118372)).toEqual(873211)
})