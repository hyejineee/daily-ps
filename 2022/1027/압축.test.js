const solution = (msg) => {
  const dic = new Map();
  for (let i = 65; i <= 90; i++) {
    dic[String.fromCharCode(i)] = [[String.fromCharCode(i), i - 65 + 1]];
  }

  let s = msg;
  let lastIndex = 26;
  const result = [];

  while (s.length > 0) {
    const key = s[0];
    const arr = dic[key];

    if (!arr) break;

    let w = key;
    let index = dic[key][0][1];

    arr.forEach(([ew, i]) => {
      const regex = new RegExp(`^${ew}`);
      if (regex.test(s)) {
        w = ew;
        index = i;
      }
    });

    result.push(index);
    s = s.replace(w, "");
    if (s[0]) {
      arr.push([`${w}${s[0]}`, lastIndex + 1]);
      lastIndex++;
    }
  }

  return result;
};

test(`압축`, () => {
  expect(solution("KAKAO")).toEqual([11, 1, 27, 15]);
  expect(solution("TOBEORNOTTOBEORTOBEORNOT	")).toEqual([
    20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34,
  ]);
});
