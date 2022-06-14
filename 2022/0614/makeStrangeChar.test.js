const solution = (s)=>{
    return s.split(' ').map(
        (word) => word.split('').map((v, i) => i %2 ==0 ? v.toUpperCase() : v.toLowerCase()).join('')
     ).join(' ')
}

test(`이상한 문자 만들기`, ()=>{
    expect(solution('try hello world')).toEqual('TrY HeLlO WoRlD')
})