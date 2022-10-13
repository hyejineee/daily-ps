const solution = (n, words) => {
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const cur = words[i];
    const remain = (i + 1) % n;

    if (cur[0] !== prev[prev.length - 1] || words.indexOf(cur) < i) {
      return [
        remain === 0 ? n : remain,
        parseInt((i + 1) / n) + (remain === 0 ? 0 : 1),
      ];
    }
  }
  return [0, 0];
};

// function solution(n, words) {
//   let answer = 0;
//   words.reduce((prev, now, idx) => {
//     answer =
//       answer ||
//       (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
//         ? idx
//         : answer);
//     return now[now.length - 1];
//   }, "");

//   return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
// }

test(`영어 끝말잇기`, () => {
  expect(
    solution(3, [
      "tank",
      "kick",
      "know",
      "wheel",
      "land",
      "dream",
      "mother",
      "robot",
      "tank",
    ])
  ).toEqual([3, 3]);

  expect(
    solution(5, [
      "hello",
      "observe",
      "effect",
      "take",
      "either",
      "recognize",
      "encourage",
      "ensure",
      "establish",
      "hang",
      "gather",
      "refer",
      "reference",
      "estimate",
      "executive",
    ])
  ).toEqual([0, 0]);

  expect(
    solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
  ).toEqual([1, 3]);
});
