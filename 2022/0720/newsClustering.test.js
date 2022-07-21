const solution = (str1, str2) => {
  const c1 = chunk(str1.toLowerCase()).sort();
  const c2 = chunk(str2.toLowerCase()).sort();

  if (c1.length === 0 && c2.length === 0) return 1 * 65536;

  let inter = 0;
  let union = 0;

  for (let i = 0; i < c1.length; i++) {
    if (c2.includes(c1[i])) {
      inter++;
      delete c2[c2.indexOf(c1[i])];
    }
    union++;
  }

  union += c2.filter((e) => !!e).length;

  return union === 0 ? 65536 : Math.floor((inter / union) * 65536);
};

const chunk = (str) => {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const r = /[^a-z]/g;
    const s = str.slice(i, i + 2);
    if (s.match(r)) continue;

    if (s.length === 2) {
      result.push(s);
    }
  }
  return result;
};

test(`뉴스 클러스터링`, () => {
  expect(solution("FRANCE", "french")).toEqual(16384);
  expect(solution("handshake", "shake hands")).toEqual(65536);
  expect(solution("aa1+aa2", "AAAA12")).toEqual(43690);
  expect(solution("E=M*C^2", "e=m*c^2")).toEqual(65536);
  expect(solution("abc", "abbb")).toEqual(16384);
  expect(solution("di mi mi mi mi", "di di di go")).toEqual(8192);
  expect(solution("BAAAA", "AAA")).toEqual(32768);
});
