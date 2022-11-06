const solution = (n, wires) => {
  const tree = {};

  wires.forEach(([n1, n2]) => {
    tree[n1] ? tree[n1].push(n2) : (tree[n1] = [n2]);
    tree[n2] ? tree[n2].push(n1) : (tree[n2] = [n1]);
  });

  Object.entries(tree).forEach(([k, v]) => {});
  console.log(tree);
  const count = countChild(tree, 3, 4);
  console.log(count);
};

const countChild = (tree, parent, node) => {
  let count = 0;

  const counter = (tree, parent, node) => {
    console.log(
      "parent",
      parent,
      "node",
      node,
      "child",
      tree[node],
      "count : ",
      count
    );

    if (tree[node].filter((e) => e !== parent).length <= 0) {
      return;
    }

    for (let e of tree[node]) {
      if (e === parent) continue;
      count++;
      counter(tree, node, e);
    }
  };

  counter(tree, parent, node);
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
