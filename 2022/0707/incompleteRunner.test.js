const solution = (participant, completion) => {
  const remain = new Map();
  participant.forEach((element) => {
    remain[element] = remain[element] ? remain[element] + 1 : 1;
  });

  completion.forEach((element) => {
    remain[element]--;
  });

  return Object.entries(remain).find(([n, count]) => count === 1)[0];
};

test(`완주하지 못한 선수`, () => {
  expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toEqual("leo");
  expect(
    solution(
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"]
    )
  ).toEqual("vinko");
  expect(
    solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
  ).toEqual("mislav");
});
