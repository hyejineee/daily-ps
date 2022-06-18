const solution = (arr) => {
    const result = []
    arr.forEach(element => {
        if (result.at(-1) !== element) {
            result.push(element)
        }
    });

    return result
}

test(`같은 숫자는 싫어`, () => {
    expect(solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1])
    expect(solution([4, 4, 4, 3, 3])).toEqual([4, 3])
})


// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }