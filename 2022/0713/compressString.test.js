const solution = (s) => {
  return s.length === 1
    ? 1
    : Math.min(
        ...Array(parseInt(s.length / 2))
          .fill()
          .map((_, i) => compress(i + 1, s))
      );
};

const compress = (unit, str) => {
  let newStr = "";
  let count = 1;
  let temp = str.substr(0, unit);

  for (let i = unit; i < str.length; i += unit) {
    const slice = str.substr(i, unit);
    if (temp === slice) {
      count++;
    } else {
      newStr += count > 1 ? count + temp : temp;
      temp = slice;
      count = 1;
    }
  }

  newStr += count > 1 ? count + temp : temp;
  return newStr.length;
};

test(`문자열 압축`, () => {
  // expect(compress(3, "abcabcdede")).toEqual(8);
  expect(solution("aabbaccc")).toEqual(7);
  expect(solution("ababcdcdababcdcd")).toEqual(9);
  expect(solution("abcabcdede")).toEqual(8);
  expect(solution("abcabcabcabcdededededede")).toEqual(14);
  expect(solution("xababcdcdababcdcd")).toEqual(17);
  expect(solution("abcdefg")).toEqual(7);
  expect(solution("aaaaaaa")).toEqual(2);
  expect(solution("a")).toEqual(1);
});
