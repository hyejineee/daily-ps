const solution = (n, arr1, arr2) => {

    const result = []
    for (let i = 0; i < n; i++) {
        result.push(("0".repeat(16) + (arr1[i] | arr2[i]).toString(2)).substr(-n))
    }

    const r = result.map((v) => v.split('').map((v2) => v2 == 0 ? ' ' : '#').join(''))
    return r
}

test(`비밀지도`, () => {
    expect(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(["#####", "# # #", "### #", "#  ##", "#####"])
    expect(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])).toEqual(["######", "###  #", "##  ##", " #### ", " #####", "### # "])
})