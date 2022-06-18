const solution = (arr, divisor) => {
    const filter = arr.filter((e) => e % divisor == 0)
    return filter.length == 0 ? [-1] : filter.sort((a, b) => a - b)
}

test(`나누어 떨어지는 숫자배열`, () => {
    expect(solution([5, 9, 7, 10], 5)).toEqual([5, 10])
    expect(solution([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36])
    expect(solution([3, 2, 6], 10)).toEqual([-1])
})