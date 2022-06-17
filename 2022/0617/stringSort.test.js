const solution = (s, n) => {
    return s.sort((a, b) => {
        if (a[n] < b[n]) return -1
        if (a[n] > b[n]) return 1
        else {
            if (a < b) return -1
            if (a > b) return 1
            else 0
        }
    })
}

test(`문자열 내 마음대로 정렬하기`, () => {
    expect(solution(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"])
    expect(solution(["abce", "abcd", "cdx"], 2)).toEqual(["abcd", "abce", "cdx"])
})

// function solution(strings, n) {
//     return strings.sort((a, b) => {
//         const chr1 = a.charAt(n);
//         const chr2 = b.charAt(n);

//         if (chr1 == chr2) {
//             return (a > b) - (a < b);
//         } else {
//             return (chr1 > chr2) - (chr1 < chr2);
//         }
//     })
// }
//  true - false = 1 


// function solution(strings, n) {
//     // strings 배열
//     // n 번째 문자열 비교
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }
// 내부 인덱스를 가지고 비교하는데, 내부 character 가 같으면 전체 string 을 비교하고 내부 character 가 다르면 내부 character 을 비교한다

