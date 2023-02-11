const solution = (queries) => {
  const arr = queries.map((query) => {
    const result = [100];
    dfs(query, [], result);
    return result[0] % 2 === 0 ? 0 : 1;
  });

  return arr;
};

const dfs = (query, candidate, result) => {
  if (isPalindrome(query)) {
    result[0] = Math.min(result[0], candidate.length);
    candidate = [];
    return;
  }

  for (let i = 0; i < query.length; i++) {
    if (query[i] === 0) continue;

    query[i] -= 1;

    candidate.push(query);
    dfs(query, candidate, result);
    candidate.pop();
  }
};

const isPalindrome = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    if (arr[start] !== arr[end]) return false;

    start++;
    end--;
  }

  return true;
};

// const bfs = (query) => {
//   const needVisit = [[query, 0]];

//   while (needVisit.length > 0) {
//     const [pop, turn] = needVisit.pop();

//     if (isPalindrome(pop)) return turn;

//     for (let i = 0; i < pop.length; i++) {
//       if (pop[i] === 0) continue;
//       const copy = [...pop];
//       copy[i] -= 1;
//       needVisit.push([copy, turn + 1]);
//     }
//   }
//   return turn;
// };

test(`isPalindrome`, () => {
  expect(isPalindrome([1, 4, 1])).toEqual(true);
  expect(isPalindrome([0, 0, 0, 0])).toEqual(true);
  expect(isPalindrome([1, 0, 0, 1])).toEqual(true);
  expect(isPalindrome([1, 2, 3])).toEqual(false);
  expect(isPalindrome([1, 2, 3, 4])).toEqual(false);
  expect(isPalindrome([1, 2])).toEqual(false);
});

test(`문제 3`, () => {
  expect(
    solution([
      [1, 4, 3],
      [1, 2, 2],
    ])
  ).toEqual([0, 1]);
});
