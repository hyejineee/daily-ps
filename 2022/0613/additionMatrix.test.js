const add = (arr1,arr2)=>{
    return arr1.map((arr, i) => arr.map((x, j) => x + arr2[i][j]))
}

test(`행렬의 덧셈`, ()=>{
    expect(add([[1,2],[2,3]], [[3,4],[5,6]])).toEqual([[4,6],[7,9]])
})