const deleteMin = (arr)=>{
    const min = Math.min(...arr)
    return arr.length <=1? [-1] : arr.filter(v => v > min) 
}

test(`제일 작은 수 제거`, ()=>{
    expect(deleteMin([4,3,1,2])).toEqual([4,3,2])
    expect(deleteMin([10])).toEqual([-1])
    
})
