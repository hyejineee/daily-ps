const solution = (p) => {
  if (!p) return;
  if (checkRight(p)) return p;

  return step(p);
};

const step = (p) => {
  if (!p) return "";

  const [u, v] = divideBalanced(p);

  if (checkRight(u)) return u + step(v);

  const convertedU = u
    .slice(1, u.length - 1)
    .split("")
    .map((e) => (e === ")" ? "(" : ")"))
    .join("");

  return `(${step(v)})${convertedU}`;
};

const divideBalanced = (s) => {
  let openCount = 0;
  let closeCount = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === "(") openCount++;
    if (c === ")") closeCount++;

    if (openCount === closeCount) {
      return [s.slice(0, i + 1), s.slice(i + 1, s.length)];
    }
  }
};

const checkRight = (p) => {
  const stack = [];

  for (let c of p) {
    if (c === "(") {
      stack.push(c);
      continue;
    }

    stack.pop();
  }

  return stack.length === 0;
};

test(`괄호 변환`, () => {
  expect(solution("(()())()")).toEqual("(()())()");

  expect(solution(")(")).toEqual("()");

  expect(solution("()))((()")).toEqual("()(())()");
});
