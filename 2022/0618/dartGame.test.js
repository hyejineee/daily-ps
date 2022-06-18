const solution = (dartResult) => {
    const result = []

    const number = dartResult.split(/S|D|T|\#|\*/g).filter((e) => !isNaN(parseInt(e))).map((v) => parseInt(v))
    const op = dartResult.split('').filter((e) => isNaN(parseInt(e)))

    for (let i of op) {
        if (i === 'S') result.push(number.shift())
        if (i === 'D') result.push(number.shift() ** 2)
        if (i === 'T') result.push(number.shift() ** 3)

        if (i === '*') {
            result[result.length - 1] *= 2
            result[result.length - 2] *= 2
        }

        if (i === '#') {
            result[result.length - 1] *= -1
        }
    }

    return result.reduce((acc, cur) => acc + cur, 0)

}

test(`다트게임`, () => {
    expect(solution("1D2S#10S")).toEqual(9)
    expect(solution("1S*2T*3S")).toEqual(23)
    expect(solution("1D#2S*3S")).toEqual(5)
})


// function solution(dartResult) {
//     const bonus = { 'S': 1, 'D': 2, 'T': 3 },
//           options = { '*': 2, '#': -1, undefined: 1 };

//     let darts = dartResult.match(/\d.?\D/g);

//     for (let i = 0; i < darts.length; i++) {
//         let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
//             score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

//         if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

//         darts[i] = score;
//     }

//     return darts.reduce((a, b) => a + b);
// }