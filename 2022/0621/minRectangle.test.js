const solution = (sizes) => {
   const sorted = sizes.map((arr) => arr.sort((a,b)=> a-b))
   return Math.max(...sorted.map((v)=> v[0])) * Math.max(...sorted.map(v=> v[1]))
   
}

test(`최소직사각형`, () => {
    expect(solution([[60, 50], [30, 70], [60, 30], [80, 40]])).toEqual(4000)
    expect(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	)).toEqual(120)
    expect(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	)).toEqual(133)
})


// function solution(sizes) {
//     const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
//     return hor * ver;
// }
