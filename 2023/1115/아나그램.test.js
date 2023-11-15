const solution = (str1, str2) => {
  const arr1 = Object.entries(
    [...str1].reduce((acc, cur) => {
      acc[cur] ? acc[cur]++ : (acc[cur] = 1);
      return acc;
    }, {})
  ).sort();

  const arr2 = Object.entries(
    [...str2].reduce((acc, cur) => {
      acc[cur] ? acc[cur]++ : (acc[cur] = 1);
      return acc;
    }, {})
  ).sort();

  for (let i = 0; i < arr1.length; i++) {
    const [c1, count1] = arr1[i];
    const [c2, count2] = arr2[i];

    if (c1 !== c2 || count1 !== count2) return "NO";
  }

  return "YES";
};

test(`아나그램`, () => {
  expect(solution("AbaAeCe", "baeeACA")).toEqual("YES");
  expect(solution("abaCC", "Caaab")).toEqual("NO");
});
