const nNumbers = (x,n)=>{
    return Array.from({length : n}, (a, i) => (i+1)* x)
}

test(`x만큼 간격이 있는 n개의 숫자`, ()=>{
    expect(nNumbers(2,5)).toEqual([2,4,6,8,10])
})