const avg = (arr)=>{
    return arr.reduce((acc,i)=>{return i+ acc}, 0) / arr.length
}


test(`평균 구하기`, ()=>{
    expect(avg([1,2,3,4])).toEqual(2.5)
    expect(avg([5,5])).toEqual(5)
})