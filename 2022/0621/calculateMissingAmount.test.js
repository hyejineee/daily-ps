const solution = (price, money, count) => {
    const needs = Array(count).fill().map((v,i)=> (i+1) * price).reduce((acc,cur)=> acc + cur, 0) - money
    return needs > 0 ? needs : 0
}

test(`부족한 금액 계산하기`, () => {
    expect(solution(3,20,4)).toEqual(10)
})

// 가우스 공식
// function solution(price, money, count) {
//     const tmp = price * count * (count + 1) / 2 - money;
//     return tmp > 0 ? tmp : 0;
// }