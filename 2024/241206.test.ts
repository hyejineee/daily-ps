class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// function pathSum(root: TreeNode | null, targetSum: number): number {
//   let result = 0;
//   const findSum = (node: TreeNode, arr: number[]) => {
//     const cur = node.val;
//     const updated = arr.map((num) => {
//       const sum = num + cur;
//       if (sum === targetSum) result += 1;
//       return sum;
//     });
//     updated.push(cur);

//     if (node.right) findSum(node.right, updated);
//     if (node.left) findSum(node.left, updated);
//     return;
//   };

//   if (root === null) return 0;

//   findSum(root, [0]);

//   return result;
// }

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;

  const dfs = (node: TreeNode | null, sum: number): number => {
    if (!node) return 0;

    sum += node.val;
    const count = sum === targetSum ? 1 : 0;

    return count + dfs(node.left, sum) + dfs(node.right, sum);
  };

  return (
    dfs(root, 0) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );
}

test("solution", () => {
  const root = new TreeNode(
    10,
    new TreeNode(
      5,
      new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
      new TreeNode(2, null, new TreeNode(1))
    ),
    new TreeNode(-3, null, new TreeNode(11))
  );

  expect(pathSum(root, 8)).toBe(3);

  const root2 = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(
      8,
      new TreeNode(13, new TreeNode(5), new TreeNode(1)),
      new TreeNode(4)
    )
  );

  expect(pathSum(root2, 22)).toBe(3);
});
