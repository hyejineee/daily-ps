const solution = (n, wires) => {
  const graph = {};
  wires.forEach(([n1, n2]) => {
    graph[n1] ? graph[n1].push(n2) : (graph[n1] = [n2]);
    graph[n2] ? graph[n2].push(n1) : (graph[n2] = [n1]);
  });

  let min = n;
  for (let i = 1; i <= n; i++) {
    const visited = Array.from({ length: n + 1 }, () => false);
    const parent = Array.from({ length: n + 1 }, (_, i) => i);

    findParent(graph, visited, parent, i);

    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      const child = findChild(parent, j, i);
      min = Math.min(min, Math.abs(child + 1 - (n - (child + 1))));
    }
  }

  return min;
};

const findParent = (graph, visited, parent, node) => {
  visited[node] = true;
  for (let n of graph[node]) {
    if (visited[n]) continue;
    parent[n] = node;
    findParent(graph, visited, parent, n);
  }
};

const findChild = (tree, node, root) => {
  const treeArr = Object.entries(tree);
  if (node === root) return treeArr.length - 1;

  let count = 0;

  const find = (n) => {
    const child = treeArr.filter(([k, v]) => v === n);

    if (child.length <= 0) return;
    if (n === root) return;

    child.forEach(([k, v]) => {
      count++;
      find(Number(k));
    });
  };
  find(node);
  return count;
};

test(`전력망을 둘로 나누기`, () => {
  expect(
    solution(9, [
      [1, 3],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [4, 7],
      [7, 8],
      [7, 9],
    ])
  ).toEqual(3);
});
