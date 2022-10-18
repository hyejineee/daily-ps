const solution = (N, road, K) => {
  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0;

  const map = new Map();

  for (let i = 1; i <= N; i++) map[i] = [];

  road.forEach(([a, b, c]) => {
    map[a].push([b, c]);
    map[b].push([a, c]);
  });

  const q = [];
  q.push([1, 0]);

  while (q.length > 0) {
    const [node, coast] = q.shift();

    map[node].forEach(([b, c]) => {
      const newDistance = coast + c;

      if (distances[b] > newDistance) {
        distances[b] = newDistance;
        q.push([b, newDistance]);
      }
    });
  }

  return distances.filter((e) => e <= K).length;
};

test(`배달`, () => {
  expect(
    solution(
      5,
      [
        [1, 2, 1],
        [2, 3, 3],
        [5, 2, 2],
        [1, 4, 2],
        [5, 3, 1],
        [5, 4, 2],
      ],
      3
    )
  ).toEqual(4);

  expect(
    solution(
      6,
      [
        [1, 2, 1],
        [1, 3, 2],
        [2, 3, 2],
        [3, 4, 3],
        [3, 5, 2],
        [3, 5, 3],
        [5, 6, 1],
      ],
      4
    )
  ).toEqual(4);
});
