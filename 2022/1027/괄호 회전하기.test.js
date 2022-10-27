const solution = (s) => {
  let arr = s.split("");
  let count = 0;

  if (checkCorrect(arr.join(""))) count++;

  for (let i = 1; i < s.length; i++) {
    arr.unshift(arr.pop());
    if (checkCorrect(arr.join(""))) count++;
  }

  return count;
};

const checkCorrect = (s) => {
  const p = /(\(\)|\{\}|\[\])/g;

  if (s === "") return true;
  if (!p.test(s) && s.length > 0) return false;

  return checkCorrect(s.replace(p, ""));
};

test(`괄호 회전하기`, () => {
  expect(solution("[](){}")).toEqual(3);
});
