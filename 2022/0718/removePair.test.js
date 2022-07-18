const solution = (s) => {
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    const e = s[i];

    if (stack[stack.length - 1] === e) {
      stack.pop();
      continue;
    }

    stack.push(e);
  }

  return stack.length > 0 ? 0 : 1;
};

test(`짝지어 제거하기`, () => {
  expect(solution("baabaa")).toEqual(1);
  expect(solution("cdcd")).toEqual(0);
  expect(solution("c")).toEqual(0);
  expect(solution("cc")).toEqual(1);
});
