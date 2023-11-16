const solution = (candidates) => {
  return [...candidates].reduce(
    (acc, cur) => {
      acc[0][cur] ? (acc[0][cur] += 1) : (acc[0][cur] = 0);

      if (acc[1] < acc[0][cur]) {
        acc[1] = acc[0][cur];
        acc[2] = cur;
      }
      return acc;
    },
    [{}, 0, ""]
  )[2];
};

test(`학급회장`, () => {
  expect(solution("BACBACCACCBDEDE")).toEqual("C");
});
