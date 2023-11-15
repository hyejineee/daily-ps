const { retrieveSourceMap } = require("source-map-support");

const solution = (s, t) => {
  let p1 = 0;
  let p2 = [...t].length - 1;
  const currentComponent = {};
  let result = 0;

  const tComponents = [...t].reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});

  for (let i = 0; i < t.length; i++) {
    currentComponent[s[i]]
      ? currentComponent[s[i]]
      : (currentComponent[s[i]] = 1);
  }

  checkAnagram(tComponents, currentComponent) && result++;

  while (p2 < s.length) {
    currentComponent[s[p1]]--;
    p1++;
    if (currentComponent[s[p1]] === 0) delete currentComponent[s[p1]];

    p2++;
    currentComponent[s[p2]]
      ? currentComponent[s[p2]]++
      : (currentComponent[s[p2]] = 1);

    checkAnagram(tComponents, currentComponent) && result++;
  }

  return result;
};

const checkAnagram = (m1, m2) => {
  const arr = Object.entries(m1);

  for (let i = 0; i < arr.length; i++) {
    const [key, count] = arr[i];

    if (m2[key] === undefined || m2[key] !== count) return false;
  }

  return true;
};

test(`모든 아나그램 찾기`, () => {
  expect(solution("bacaAacba", "abc")).toEqual(3);
});
