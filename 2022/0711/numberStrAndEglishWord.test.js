const solution = (s) => {
  const numberWordMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = s;
  Object.entries(numberWordMap).forEach(([k, v]) => {
    const reg = new RegExp(k, "g");
    result = result.replace(reg, v);
  });

  return Number(result);
};

test(`숫자 문자열과 영단어`, () => {
  expect(solution("one4seveneight")).toEqual(1478);
  expect(solution("23four5six7")).toEqual(234567);
  expect(solution("2three45sixseven")).toEqual(234567);
  expect(solution("123")).toEqual(123);
  expect(solution("1oneoneone")).toEqual(1111);
});
