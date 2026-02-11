class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function pathSum(root, targetSum) {
  if (!root) return 0;

  // 현재 노드에서 시작하는 경로를 확인
  return (
    countPaths(root, targetSum) +
    // 왼쪽 서브트리에서 시작하는 경로를 확인
    pathSum(root.left, targetSum) +
    // 오른쪽 서브트리에서 시작하는 경로를 확인
    pathSum(root.right, targetSum)
  );
}

// 특정 노드에서 시작하는 경로들의 합이 targetSum과 일치하는 경우를 카운트
function countPaths(node, targetSum, sum = 0) {
  if (!node) return 0;

  sum += node.val;

  return (
    (sum === targetSum ? 1 : 0) +
    countPaths(node.left, targetSum, sum) +
    countPaths(node.right, targetSum, sum)
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

  const root2 = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(
      8,
      new TreeNode(13, new TreeNode(5), new TreeNode(1)),
      new TreeNode(4)
    )
  );

  const root3 = new TreeNode(1);
  expect(pathSum(root3, 1)).toBe(1);
});
