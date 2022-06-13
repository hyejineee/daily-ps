const harshardNumber = (x)=>{
    return x % sum(x) ===0
}

const sum = (x)=>{
    if(x ==0) return 0
    if(x <=1) return 1
    return sum(parseInt(x/10) )+ parseInt(x%10)
}

test(`하샤드의 수`, ()=>{
    expect(harshardNumber(10)).toEqual(true)
    expect(harshardNumber(13)).toEqual(false)
    expect(harshardNumber(12)).toEqual(true)
})