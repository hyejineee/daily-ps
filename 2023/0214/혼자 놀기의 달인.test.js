const solution = (cards) => {
  let result = 0;
  for (let i = 0; i < cards.length; i++) {
    const visited = Array(cards.length).fill(false);
    const set = new Set(
      Array(cards.length)
        .fill(0)
        .map((_, i) => i)
    );

    const [group, count] = search(cards, visited, i);

    group.forEach((e) => {
      set.delete(e);
    });

    for (let j of set) {
      const [, count2] = search(cards, visited, j);
      result = Math.max(result, count * count2);
    }
  }

  return result;
};

const search = (cards, visited, startIndex) => {
  const needVisit = [startIndex];
  visited[startIndex] = true;

  const groupVisited = [startIndex];

  let count = 0;
  while (needVisit.length > 0) {
    const nextIdx = cards[needVisit.pop()] - 1;

    if (visited[nextIdx]) {
      count += 1;
      break;
    }

    needVisit.push(nextIdx);
    groupVisited.push(nextIdx);
    visited[nextIdx] = true;
    count++;
  }

  return [groupVisited, count];
};

test(`혼자 놀기의 달인`, () => {
  expect(solution([8, 6, 3, 7, 2, 5, 1, 4])).toEqual(12);
});
