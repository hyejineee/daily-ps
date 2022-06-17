const solution = (s) => {
    if(!(s.length === 4 || s.length === 6)) return false
   
    for(let i of s.split('')){
        if(isNaN(parseInt(i))) return false
        if(parseInt(i) < 0) return false
    }

    return true
}

test(`문자열 다루기 기본`, () => {
    expect(solution("1234")).toEqual(true)
    expect(solution("a234")).toEqual(false)
    expect(solution("1e22")).toEqual(false)
})