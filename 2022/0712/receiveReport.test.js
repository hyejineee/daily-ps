const solution = (id_list, report, k) => {
  const reporters = {};
  const reportedCount = {};
  const mailCount = Array(id_list.length).fill(0);

  new Set(report).forEach((e) => {
    const [reporter, reported] = e.split(" ");

    reporters[reported]
      ? reporters[reported].add(id_list.indexOf(reporter))
      : (reporters[reported] = new Set([id_list.indexOf(reporter)]));

    reportedCount[reported]
      ? (reportedCount[reported] = reportedCount[reported] + 1)
      : (reportedCount[reported] = 1);
  });

  Object.entries(reportedCount)
    .filter(([_, count]) => count >= k)
    .forEach(([name, _]) => {
      reporters[name].forEach((e) => (mailCount[e] = mailCount[e] + 1));
    });

  return mailCount;
};

test(`신고 결과 받기`, () => {
  expect(
    solution(
      ["muzi", "frodo", "apeach", "neo"],
      ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
      2
    )
  ).toEqual([2, 1, 1, 0]);

  expect(
    solution(
      ["con", "ryan"],
      ["ryan con", "ryan con", "ryan con", "ryan con"],
      3
    )
  ).toEqual([0, 0]);
});
