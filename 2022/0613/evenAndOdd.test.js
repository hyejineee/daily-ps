const evenAndOdd = (n)=>{
    return n %2 ==0 ?"Even" : "Odd"
}

test(`짝수와 홀수`, ()=>{
    expect(evenAndOdd(3)).toEqual("Odd")
    expect(evenAndOdd(4)).toEqual("Even")
})
